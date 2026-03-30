import { useParams, Link } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import { CATEGORIES } from '../components/CategoryMenu'
import ProductGrid from '../components/ProductGrid'

/**
 * Category — Lista de productos filtrados por categoría.
 * Ruta: /categoria/:slug
 */
export default function Category() {
    const { slug } = useParams()
    const { products, loading } = useProducts()

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

            {/* ── Grid de productos o Contenido Especial para "Variedad" ── */}
            <div className="container pb-5">
                {slug === 'variedad' ? (
                    <div className="empty-state" style={{ background: '#fff', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', textAlign: 'center', marginTop: '20px' }}>
                        <i className="bi bi-shop" style={{ fontSize: '3.5rem', color: 'var(--ml-blue)', marginBottom: '16px', display: 'block' }}></i>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--ml-blue)' }}>Descubrí nuestra gran variedad de artículos</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--ml-gray-800)', maxWidth: '600px', margin: '0 auto 24px', lineHeight: '1.6' }}>
                            Contamos con una extensa línea de productos para complementar tu limpieza: 
                            <strong> trapos de piso, secadores, escobas, guantes, bolsas de residuos, palas, cepillos, rejillas, esponjas, paños, plumeros, aerosoles</strong> y mucho más.
                        </p>
                        <p style={{ fontSize: '1rem', color: 'var(--ml-green)', fontWeight: 600 }}>
                            Por favor, consultá valores y disponibilidad enviándonos un mensaje.
                        </p>
                        <a href="https://wa.me/542234389793" target="_blank" rel="noopener noreferrer" className="btn-hero d-inline-block mt-3" style={{ background: '#25D366', color: '#fff', textDecoration: 'none', padding: '12px 32px', borderRadius: 'var(--radius-pill)', fontWeight: 700 }}>
                            <i className="bi bi-whatsapp me-2"></i>
                            Consultar por WhatsApp
                        </a>
                    </div>
                ) : (
                    <ProductGrid
                        products={filtered}
                        emptyTitle="Sin productos en esta categoría"
                        emptyText="Próximamente sumaremos más productos aquí."
                    />
                )}
            </div>
        </>
    )
}
