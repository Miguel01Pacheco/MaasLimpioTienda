import { useSearchParams, Link } from 'react-router-dom'
import products from '../data/products.json'
import ProductGrid from '../components/ProductGrid'

/**
 * SearchResults — Resultados de búsqueda de productos por nombre.
 * Ruta: /buscar?q=<término>
 */
export default function SearchResults() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q') || ''

    // Filtrado case-insensitive por nombre del producto
    const results = products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <>
            {/* ── Encabezado ── */}
            <div className="page-header">
                <div className="container">
                    <nav aria-label="breadcrumb" style={{ marginBottom: '8px' }}>
                        <ol className="breadcrumb mb-0" style={{ fontSize: '0.82rem' }}>
                            <li className="breadcrumb-item">
                                <Link to="/">Inicio</Link>
                            </li>
                            <li className="breadcrumb-item active">Búsqueda</li>
                        </ol>
                    </nav>

                    <h2>
                        <i className="bi bi-search me-2"></i>
                        Resultados para "<span style={{ color: 'var(--ml-blue-mid)' }}>{query}</span>"
                    </h2>
                    <p style={{ margin: 0, color: 'var(--ml-gray-600)', fontSize: '0.9rem' }}>
                        {results.length} resultado{results.length !== 1 ? 's' : ''}
                    </p>
                </div>
            </div>

            {/* ── Resultados ── */}
            <div className="container pb-5">
                <ProductGrid
                    products={results}
                    emptyTitle="Sin resultados"
                    emptyText={`No encontramos productos para "${query}". Probá con otro término.`}
                />
            </div>
        </>
    )
}
