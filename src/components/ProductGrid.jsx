import ProductCard from './ProductCard'

/**
 * ProductGrid — Renderiza un grid responsive de ProductCards.
 * @param {Array}  products    — lista de productos a mostrar
 * @param {string} emptyTitle  — título cuando la lista está vacía
 * @param {string} emptyText   — descripción cuando la lista está vacía
 */
export default function ProductGrid({
    products,
    emptyTitle = 'No hay productos',
    emptyText = 'Intentá con otra búsqueda o categoría.',
}) {
    if (!products || products.length === 0) {
        return (
            <div className="empty-state">
                <i className="bi bi-box-seam"></i>
                <h3>{emptyTitle}</h3>
                <p>{emptyText}</p>
            </div>
        )
    }

    return (
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3">
            {products.map(product => (
                <div className="col" key={product.id}>
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    )
}
