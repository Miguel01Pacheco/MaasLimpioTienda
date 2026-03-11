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
      {/* ── Carousel Banner ── */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          {/* Slide 1 - Dclod (Violeta Pastel) */}
          <div className="carousel-item active hero-banner" style={{ background: 'linear-gradient(135deg, #E1BEE7 0%, #CE93D8 100%)' }}>
            <div className="container" style={{ color: '#4A148C' }}>
              <h1 style={{ color: '#4A148C' }}>Descubrí la<br />Línea Dclod</h1>
              <p style={{ color: '#4A148C' }}>
                Fragancias que perduran. Limpiadores de pisos premium para darle a tu hogar el aroma perfecto todos los días.
              </p>
              <Link to="/categoria/dclod" className="btn-hero" style={{ background: '#6A1B9A', color: '#fff' }}>
                <i className="bi bi-stars me-2"></i>
                Ver línea Dclod
              </Link>
            </div>
          </div>
          {/* Slide 2 - Variedad (Naranja Pastel) */}
          <div className="carousel-item hero-banner" style={{ background: 'linear-gradient(135deg, #FFE0B2 0%, #FFCC80 100%)' }}>
            <div className="container" style={{ color: '#E65100' }}>
              <h1 style={{ color: '#E65100' }}>Variedad y facilidad<br />en tu pedido</h1>
              <p style={{ color: '#E65100' }}>
                Elegí lo que necesites y finalizá tu pedido fácilmente a través de WhatsApp. ¡Sin complicaciones!
              </p>
              <Link to="/categoria/variedad" className="btn-hero" style={{ background: '#E65100', color: '#fff' }}>
                <i className="bi bi-shop me-2"></i>
                Ver artículos de variedad
              </Link>
            </div>
          </div>
          {/* Slide 3 - Granel (Verde Pastel) */}
          <div className="carousel-item hero-banner" style={{ background: 'linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)' }}>
            <div className="container" style={{ color: '#1B5E20' }}>
              <h1 style={{ color: '#1B5E20' }}>Ahorrá y reutilizá<br />comprando a granel</h1>
              <p style={{ color: '#1B5E20' }}>
                Cuidá tu bolsillo y el medio ambiente recargando tus productos favoritos de limpieza.
              </p>
              <Link to="/categoria/granel" className="btn-hero" style={{ background: '#1B5E20', color: '#fff' }}>
                <i className="bi bi-recycle me-2"></i>
                Ver línea a granel
              </Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      <div className="container py-4">

        {/* ── Pills de categorías ── */}
        <h2 id="categorias" className="section-title" style={{ scrollMarginTop: '80px' }}>
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
