import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

/**
 * Hook para acceder al contexto del carrito.
 * Debe usarse dentro de un CartProvider.
 */
export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart debe usarse dentro de un <CartProvider>')
    }
    return context
}
