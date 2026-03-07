import { useCart } from '../hooks/useCart'

/**
 * CartItem — Fila de un producto dentro de la página /carrito.
 * Permite aumentar, disminuir cantidad y eliminar el producto.
 * @param {object} item — { product, quantity }
 */
export default function CartItem({ item }) {
    const { removeFromCart, updateQuantity } = useCart()
    const { product, quantity } = item

    const subtotal = product.price * quantity

    return (
        <div className="cart-item-card">
            {/* Imagen */}
            <img
                src={product.image}
                alt={product.name}
                className="cart-item-img"
                loading="lazy"
            />

            {/* Nombre */}
            <div className="flex-grow-1">
                <div className="cart-item-name">{product.name}</div>
                <div style={{ color: 'var(--ml-gray-600)', fontSize: '0.85rem' }}>
                    ${product.price.toLocaleString('es-AR')} c/u
                </div>
            </div>

            {/* Control de cantidad */}
            <div className="quantity-control">
                <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    aria-label="Disminuir cantidad"
                >
                    −
                </button>
                <span>{quantity}</span>
                <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    aria-label="Aumentar cantidad"
                >
                    +
                </button>
            </div>

            {/* Subtotal */}
            <div
                style={{
                    fontWeight: 700,
                    color: 'var(--ml-blue)',
                    fontSize: '1rem',
                    minWidth: '80px',
                    textAlign: 'right',
                }}
            >
                ${subtotal.toLocaleString('es-AR')}
            </div>

            {/* Eliminar */}
            <button
                className="btn-remove"
                onClick={() => removeFromCart(product.id)}
                aria-label={`Eliminar ${product.name}`}
                title="Eliminar"
            >
                <i className="bi bi-trash3"></i>
            </button>
        </div>
    )
}
