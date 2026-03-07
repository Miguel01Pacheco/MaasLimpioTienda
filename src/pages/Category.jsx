import { useParams, Link } from 'react-router-dom'
import products from '../data/products.json'
import { CATEGORIES } from '../components/CategoryMenu'
import ProductGrid from '../components/ProductGrid'

/**
 * Category — Lista de productos filtrados por categoría.
 * Ruta: /categoria/:slug
 */
export default function Category() {
    const { slug } = useParams()

    // Buscar la categoría por slug para obtener label e ícono
    const categoryInfo = CATEGORIES.find(c => c.slug === slug)

    // Filtrar productos que pertenecen a esta categoría
    const filtered = products.filter(p => p.category === slug)

    // Categoría no encontrada
    if (!categoryInfo) {
        return (
            <div className="container py-5">
                <div className="empty-state">
                    <i className="bi bi-exclamation-circle"></i>
                    <h3>Categoría no encontrada</h3>
                    <p>La categoría que buscás no existe.</p>
                    <Link to="/" className="btn btn-primary rounded-pill">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            {/* ── Encabezado de página ── */}
            <div className="page-header">
                <div className="container">
                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb" style={{ marginBottom: '8px' }}>
                        <ol className="breadcrumb mb-0" style={{ fontSize: '0.82rem' }}>
                            <li className="breadcrumb-item">
                                <Link to="/">Inicio</Link>
                            </li>
                            <li className="breadcrumb-item active">{categoryInfo.label}</li>
                        </ol>
                    </nav>

                    <h2>
                        <i className={`bi ${categoryInfo.icon} me-2`}></i>
                        {categoryInfo.label}
                    </h2>
                    <p style={{ margin: 0, color: 'var(--ml-gray-600)', fontSize: '0.9rem' }}>
                        {filtered.length} producto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
                    </p>
                </div>
            </div>

            {/* ── Grid de productos ── */}
            <div className="container pb-5">
                <ProductGrid
                    products={filtered}
                    emptyTitle="Sin productos en esta categoría"
                    emptyText="Próximamente sumaremos más productos aquí."
                />
            </div>
        </>
    )
}
