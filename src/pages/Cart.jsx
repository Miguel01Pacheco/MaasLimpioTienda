import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import CartItem from '../components/CartItem'

// Número de WhatsApp destino
const WA_NUMBER = '542234389793'

/**
 * Genera el mensaje de WhatsApp con el detalle del pedido.
 * @param {Array} items — items del carrito [{ product, quantity }]
 * @param {number} totalPrice — total del pedido
 * @returns {string} mensaje URL-encoded
 */
function buildWhatsAppMessage(items, totalPrice) {
    const lines = items.map(
        ({ product, quantity }) =>
            `• ${product.name} x${quantity} — $${(product.price * quantity).toLocaleString('es-AR')}`
    )

    const message = [
        'Hola! Quiero hacer este pedido desde *Mass Limpio*:',
        '',
        ...lines,
        '',
        `*Total: $${totalPrice.toLocaleString('es-AR')}*`,
    ].join('\n')

    return encodeURIComponent(message)
}

/**
 * Cart — Página del carrito (/carrito).
 * Lista los productos con CartItem, muestra el total
 * y el botón para enviar el pedido por WhatsApp.
 */
export default function Cart() {
    const { items, totalPrice, totalItems, clearCart } = useCart()

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${buildWhatsAppMessage(items, totalPrice)}`

    // ── Carrito vacío
    if (items.length === 0) {
        return (
            <div className="container py-5 cart-page">
                <div className="empty-state">
                    <i className="bi bi-cart-x"></i>
                    <h3>Tu carrito está vacío</h3>
                    <p>Agregá productos para comenzar tu pedido.</p>
                    <Link to="/" className="btn btn-primary rounded-pill px-4">
                        <i className="bi bi-arrow-left me-1"></i>
                        Ver productos
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-4 cart-page">
            {/* Encabezado */}
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--ml-blue)', margin: 0 }}>
                    <i className="bi bi-cart3 me-2"></i>
                    Tu carrito
                    <span
                        style={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: 'var(--ml-gray-600)',
                            marginLeft: '8px',
                        }}
                    >
                        ({totalItems} {totalItems === 1 ? 'producto' : 'productos'})
                    </span>
                </h1>
                <Link to="/" style={{ fontSize: '0.88rem', color: 'var(--ml-blue)' }}>
                    <i className="bi bi-arrow-left me-1"></i>
                    Seguir comprando
                </Link>
            </div>

            <div className="row g-4">
                {/* ── Lista de productos ── */}
                <div className="col-12 col-lg-8">
                    {items.map(item => (
                        <CartItem key={item.product.id} item={item} />
                    ))}

                    {/* Vaciar carrito */}
                    <div className="text-end mt-2">
                        <button
                            onClick={clearCart}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--ml-gray-600)',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                textDecoration: 'underline',
                            }}
                        >
                            <i className="bi bi-trash3 me-1"></i>
                            Vaciar carrito
                        </button>
                    </div>
                </div>

                {/* ── Resumen del pedido ── */}
                <div className="col-12 col-lg-4">
                    <div className="cart-summary">
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>
                            Resumen del pedido
                        </h2>

                        {/* Líneas del resumen */}
                        {items.map(({ product, quantity }) => (
                            <div
                                key={product.id}
                                className="d-flex justify-content-between mb-1"
                                style={{ fontSize: '0.85rem', color: 'var(--ml-gray-600)' }}
                            >
                                <span>
                                    {product.name} ×{quantity}
                                </span>
                                <span>${(product.price * quantity).toLocaleString('es-AR')}</span>
                            </div>
                        ))}

                        <hr style={{ margin: '16px 0' }} />

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span style={{ fontWeight: 600 }}>Total</span>
                            <span className="cart-total">${totalPrice.toLocaleString('es-AR')}</span>
                        </div>

                        {/* Botón WhatsApp */}
                        <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp"
                            id="btnWhatsApp"
                        >
                            <i className="bi bi-whatsapp" style={{ fontSize: '1.3rem' }}></i>
                            Enviar pedido por WhatsApp
                        </a>

                        <p
                            style={{
                                fontSize: '0.75rem',
                                color: 'var(--ml-gray-400)',
                                textAlign: 'center',
                                marginTop: '10px',
                                marginBottom: 0,
                            }}
                        >
                            Te redirigiremos a WhatsApp con tu pedido listo para enviar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
