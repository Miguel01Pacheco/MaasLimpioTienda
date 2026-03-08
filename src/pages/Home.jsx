import { Link } from 'react-router-dom'
import products from '../data/products.json'
import ProductGrid from '../components/ProductGrid'
import { CATEGORIES } from '../components/CategoryMenu'

/**
 * Home — Página principal de Mass Limpio.
 * Secciones: Hero, Pills de categorías, Productos Destacados.
 */
export default function Home() {
  // Solo los productos marcados como destacados
  const featured = products.filter(p => p.featured)

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="hero-banner">
        <div className="container">
          <h1>Limpieza de calidad<br />al mejor precio</h1>
          <p>
            Detergentes, desinfectantes, productos para piscinas y mucho más.
            Hacé tu pedido fácil y rápido por WhatsApp.
          </p>
          <Link to="/carrito" className="btn-hero">
            <i className="bi bi-cart3 me-2"></i>
            Ver mi carrito
          </Link>
        </div>
      </section>

      <div className="container py-4">

        {/* ── Pills de categorías ── */}
        <h2 className="section-title">
          <i className="bi bi-grid-3x3-gap-fill"></i>
          Categorías
        </h2>
        <div className="category-pills">
          {CATEGORIES.map(({ slug, label, icon }) => (
            <Link
              key={slug}
              to={`/categoria/${slug}`}
              className="category-pill"
            >
              <i className={`bi ${icon}`}></i>
              {label}
            </Link>
          ))}
        </div>

        {/* ── Productos Destacados ── */}
        <h2 className="section-title">
          <i className="bi bi-star-fill"></i>
          Productos destacados
        </h2>
        <ProductGrid
          products={featured}
          emptyTitle="Sin destacados"
          emptyText="Próximamente agregaremos productos destacados."
        />

        {/* ── Banner Promo ── */}
        {/*
        <div
          className="mt-5 p-4 d-flex flex-column flex-md-row align-items-center gap-3 justify-content-between"
          style={{
            background: 'linear-gradient(90deg, #1B5E20, #2E7D32)',
            borderRadius: 'var(--radius-lg)',
            color: '#fff',
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.8, marginBottom: '4px' }}>
              🏆 PROMOCIÓN ESPECIAL
            </div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>
              Club Mar Chiquita — ¡Ayudamos a los chicos a viajar!
            </h2>
            <p style={{ opacity: 0.85, margin: '6px 0 0', fontSize: '0.9rem' }}>
              Comprá en nuestra promo especial y contribuís al viaje de los chicos del club.
            </p>
          </div>
          
        
          <Link
            to="/promo"
            style={{
              background: '#fff',
              color: '#2E7D32',
              fontWeight: 700,
              padding: '10px 24px',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Ver promoción →
          </Link>
          
        </div>
        */}

      </div>

    </>
  )
}
