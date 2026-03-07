import { useState } from 'react'
import { useCart } from '../hooks/useCart'

/**
 * ProductCard — Tarjeta visual de un producto.
 * Muestra imagen, nombre, descripción truncada, precio y botón de carrito.
 * @param {object} product — objeto de product con id, name, price, image, description
 */
export default function ProductCard({ product }) {
    const { addToCart } = useCart()
    const [added, setAdded] = useState(false)

    const handleAdd = () => {
        addToCart(product)
        setAdded(true)
        // Feedback visual: vuelve al estado normal después de 1.5 segundos
        setTimeout(() => setAdded(false), 1500)
    }

    return (
        <div className="product-card">
            {/* Imagen del producto */}
            <div className="product-card-img-wrapper">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                />
            </div>

            {/* Información */}
            <div className="product-card-body">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-desc">{product.description}</p>

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
