import { useState } from 'react'
import { useCart } from '../hooks/useCart'

/**
 * ProductCard — Tarjeta visual de un producto.
 * Muestra imagen, nombre, descripción truncada, precio y botón de carrito.
 * Ahora el fondo de la imagen cambia según la categoría.
 */
export default function ProductCard({ product }) {
    const { addToCart } = useCart()
    const [added, setAdded] = useState(false)

    const handleAdd = () => {
        addToCart(product)
        setAdded(true)
        setTimeout(() => setAdded(false), 1500)
    }

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
        <div className="product-card">

            {/* Imagen del producto */}
            <div className={`product-card-img-wrapper ${bgClass}`}>
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                />
            </div>

            {/* Información */}
            <div className="product-card-body">
                <h3 className="product-card-name">{product.name}</h3>

                <p className="product-card-desc">
                    {product.description}
                </p>

                <div className="product-card-price">
                    ${product.price.toLocaleString('es-AR')}
                </div>

                <button
                    className={`btn-add-cart ${added ? 'added' : ''}`}
                    onClick={handleAdd}
                    aria-label={`Agregar ${product.name} al carrito`}
                >
                    <i className={`bi ${added ? 'bi-check-lg' : 'bi-cart-plus'}`}></i>
                    {added ? '¡Agregado!' : 'Agregar al carrito'}
                </button>
            </div>
        </div>
    )
}
