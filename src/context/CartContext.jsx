import { createContext, useEffect, useReducer, useMemo } from 'react'

// Clave usada para guardar el carrito en localStorage
const STORAGE_KEY = 'mass-limpio-cart'

// ─── Reducer ──────────────────────────────────────────────────────────────────
function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD': {
            const existing = state.find(item => item.product.id === action.product.id)
            if (existing) {
                // Si ya está en el carrito → incrementar cantidad
                return state.map(item =>
                    item.product.id === action.product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            // Producto nuevo → agregar con cantidad 1
            return [...state, { product: action.product, quantity: 1 }]
        }
        case 'REMOVE':
            return state.filter(item => item.product.id !== action.id)

        case 'UPDATE':
            return state.map(item =>
                item.product.id === action.id
                    ? { ...item, quantity: Math.max(1, action.quantity) }
                    : item
            )
        case 'CLEAR':
            return []

        default:
            return state
    }
}

// ─── Estado inicial desde localStorage ────────────────────────────────────────
function getInitialState() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : []
    } catch {
        return []
    }
}

// ─── Context ──────────────────────────────────────────────────────────────────
export const CartContext = createContext(null)

// ─── Provider ─────────────────────────────────────────────────────────────────
export function CartProvider({ children }) {
    const [items, dispatch] = useReducer(cartReducer, [], getInitialState)

    // Persistir en localStorage cada vez que cambia el carrito
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }, [items])

    // Valores derivados memoizados para evitar re-renders innecesarios
    const totalItems = useMemo(
        () => items.reduce((acc, item) => acc + item.quantity, 0),
        [items]
    )
    const totalPrice = useMemo(
        () => items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
        [items]
    )

    // Acciones del carrito
    const addToCart = (product) => dispatch({ type: 'ADD', product })
    const removeFromCart = (id) => dispatch({ type: 'REMOVE', id })
    const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE', id, quantity })
    const clearCart = () => dispatch({ type: 'CLEAR' })

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
