import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import ProductGrid from '../components/ProductGrid'

/**
 * Promo — Página especial de promoción (/promo).
 * Temática: ayudar a viajar a los chicos del Club Mar Chiquita.
 */
export default function Promo() {
    const { products, loading } = useProducts()
    
    // Productos destacados para la promo (variedad + piscinas)
    const PROMO_CATEGORIES = ['piscinas', 'variedad', 'linea-dclod']
    const promoProducts = products.filter(p => PROMO_CATEGORIES.includes(p.category))
    
    return (
        <>
            {/* ── Banner principal ── */}
            <section className="promo-banner">
                <div className="container" style={{ position: 'relative' }}>
                    <div className="promo-badge">Edición especial</div>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 900, marginBottom: '12px' }}>
                        ⚽ Club Mar Chiquita
                    </h1>
                    <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', opacity: 0.9, maxWidth: '600px', margin: '0 auto 16px' }}>
                        Con cada compra de esta selección de productos, ayudás a que los chicos
                        del <strong>Club Mar Chiquita</strong> puedan costear su viaje.
                    </p>
                    <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>
                        ¡Comprando limpieza, hacés posible la aventura de ellos!
                    </p>
                </div>
            </section>

            <div className="container pb-5">

                {/* ── Explicación ── */}
                <div
                    className="my-4 p-4 d-flex flex-column flex-md-row gap-3 align-items-start"
                    style={{
                        background: 'var(--ml-green-light)',
                        borderRadius: 'var(--radius-md)',
                        border: '1.5px solid #A5D6A7',
                    }}
                >
                    <div style={{ fontSize: '2.5rem', lineHeight: 1 }}>🏆</div>
                    <div>
                        <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--ml-green)', marginBottom: '6px' }}>
                            ¿Cómo funciona la promoción?
                        </h2>
                        <p style={{ margin: 0, color: '#388E3C', fontSize: '0.92rem' }}>
                            Una parte de las ganancias de los productos de esta página se destina directamente
                            al fondo de viaje de los chicos del Club Mar Chiquita. No tenés que hacer nada
                            especial: simplemente elegí los productos, sumálos a tu carrito y enviá tu pedido
                            por WhatsApp como siempre. Gracias por sumarte.
                        </p>
                    </div>
                </div>

                {/* ── Estadísticas decorativas ── */}
                <div className="row g-3 my-4">
                    {[
                        { icon: 'bi-people-fill', num: '+50 familias', text: 'ya participaron de la promo' },
                        { icon: 'bi-cart-check-fill', num: '+200 pedidos', text: 'enviados por WhatsApp' },
                        { icon: 'bi-airplane-fill', num: '1 viaje', text: 'que queremos hacer posible' },
                    ].map(({ icon, num, text }) => (
                        <div key={num} className="col-12 col-sm-4">
                            <div
                                style={{
                                    background: 'var(--ml-white)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '20px',
                                    textAlign: 'center',
                                    boxShadow: 'var(--shadow-sm)',
                                    border: '1px solid var(--ml-gray-200)',
                                }}
                            >
                                <i className={`bi ${icon}`} style={{ fontSize: '1.8rem', color: 'var(--ml-green)' }}></i>
                                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ml-text)', margin: '8px 0 2px' }}>
                                    {num}
                                </div>
                                <div style={{ fontSize: '0.82rem', color: 'var(--ml-gray-600)' }}>{text}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Productos promocionales ── */}
                <h2 className="section-title">
                    <i className="bi bi-bag-heart-fill"></i>
                    Productos de la promo
                </h2>

                <ProductGrid
                    products={promoProducts}
                    emptyTitle="Sin productos disponibles"
                    emptyText="Próximamente agregaremos los productos de la promoción."
                />

                {/* ── CTA Final ── */}
                <div
                    className="text-center mt-5 p-4"
                    style={{
                        background: 'linear-gradient(135deg, var(--ml-blue-pale), var(--ml-blue-bg))',
                        borderRadius: 'var(--radius-lg)',
                        border: '1.5px solid var(--ml-blue-bg)',
                    }}
                >
                    <i className="bi bi-cart3" style={{ fontSize: '2rem', color: 'var(--ml-blue)', marginBottom: '8px', display: 'block' }}></i>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ml-blue)', marginBottom: '8px' }}>
                        ¿Listo para hacer tu pedido?
                    </h2>
                    <p style={{ color: 'var(--ml-gray-600)', marginBottom: '16px', fontSize: '0.9rem' }}>
                        Sumá los productos al carrito y enviá tu pedido directamente por WhatsApp.
                    </p>
                    <Link to="/carrito" className="btn btn-primary rounded-pill px-5 py-2 fw-700">
                        <i className="bi bi-cart3 me-2"></i>
                        Ir al carrito
                    </Link>
                </div>

            </div>
        </>
    )
}
