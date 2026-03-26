import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

/**
 * ProductCard — Tarjeta visual de un producto.
 * Muestra imagen, nombre, precio y controles de carrito.
 * La descripción solo es visible si el usuario hace click en la tarjeta.
 */
export default function ProductCard({ product }) {
    const { items, addToCart, removeFromCart, updateQuantity } = useCart()
    const [isExpanded, setIsExpanded] = useState(false)

    // Buscar si el producto ya está en el carrito
    const cartItem = items.find(i => i.product.id === product.id)

    /* Fondo según categoría */
    const categoryBackground = {
        lavado: 'bg-cat-lavado',
        hogar: 'bg-cat-hogar',
        piscinas: 'bg-cat-piscinas',
        granel: 'bg-cat-granel',
        dclod: 'bg-cat-dclod',
        variedad: 'bg-cat-variedad'
    }

    const bgClass = categoryBackground[product.category] || 'bg-cat-default'

    return (
        <div 
            className="product-card d-flex flex-column" 
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ cursor: 'pointer' }}
        >
            {/* Imagen del producto */}
            <div className={`product-card-img-wrapper ${bgClass}`}>
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                />
            </div>

            {/* Información */}
            <div className="product-card-body d-flex flex-column flex-grow-1">
                <h3 className="product-card-name mb-2">{product.name}</h3>

                {/* Mostrar descripción solo si se hace clic */}
                {isExpanded && (
                    <p className="product-card-desc mb-3" style={{ WebkitLineClamp: 'unset', display: 'block', flex: 'none' }}>
                        {product.description}
                    </p>
                )}

                <div className="product-card-price mb-3" style={{ marginTop: 'auto' }}>
                    ${product.price.toLocaleString('es-AR')}
                </div>

                {/* Controles del carrito (alineados abajo) */}
                <div onClick={(e) => e.stopPropagation()}>
                    {cartItem ? (
                        <div className="d-flex flex-column gap-2">
                            <div className="quantity-control d-flex w-100">
                                <button
                                    onClick={() => {
                                        if (cartItem.quantity === 1) {
                                            removeFromCart(product.id)
                                        } else {
                                            updateQuantity(product.id, cartItem.quantity - 1)
                                        }
                                    }}
                                    aria-label="Disminuir cantidad"
                                    style={{ flex: 1, padding: '8px 0' }}
                                >
                                    −
                                </button>
                                <span style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {cartItem.quantity}
                                </span>
                                <button
                                    onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                                    aria-label="Aumentar cantidad"
                                    style={{ flex: 1, padding: '8px 0' }}
                                >
                                    +
                                </button>
                            </div>
                            <Link to="/carrito" className="btn btn-primary d-flex align-items-center justify-content-center w-100 rounded-pill fw-bold py-2" style={{ fontSize: '0.85rem' }}>
                                <i className="bi bi-cart-check me-2"></i>
                                Ver carrito
                            </Link>
                        </div>
                    ) : (
                        <button
                            className="btn-add-cart w-100 py-2 d-flex align-items-center justify-content-center"
                            onClick={() => addToCart(product)}
                            aria-label={`Agregar ${product.name} al carrito`}
                        >
                            <i className="bi bi-cart-plus me-2"></i>
                            Agregar al carrito
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
