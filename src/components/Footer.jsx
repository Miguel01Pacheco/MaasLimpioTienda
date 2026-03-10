import { Link } from 'react-router-dom'

/**
 * Footer — Pie de página con info de contacto y links rápidos.
 */
export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row g-4">

                    {/* Marca */}
                    <div className="col-12 col-md-4">
                        <img
                            src="/imagenes/logo-mass-sin-fondo.png"
                            alt="Mass Limpio"
                            style={{ height: '48px', filter: 'brightness(0) invert(1)', marginBottom: '12px' }}
                        />
                        <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                            Productos de limpieza de calidad para tu hogar y negocio.
                            Pedido fácil por WhatsApp.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="col-6 col-md-4">
                        <h5 style={{ fontSize: '0.95rem', marginBottom: '12px' }}>Categorías</h5>
                        <ul className="list-unstyled" style={{ fontSize: '0.875rem' }}>
                            <li><Link to="/categoria/lavado">Lavado</Link></li>
                            <li><Link to="/categoria/limpieza-del-hogar">Limpieza del Hogar</Link></li>
                            <li><Link to="/categoria/piscinas">Piscinas</Link></li>
                            <li><Link to="/categoria/linea-dclod">Línea Dclod</Link></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="col-6 col-md-4">
                        <h5 style={{ fontSize: '0.95rem', marginBottom: '12px' }}>Contacto</h5>
                        <ul className="list-unstyled" style={{ fontSize: '0.875rem' }}>
                            <li className="mb-1">
                                <a
                                    href="https://wa.me/542234389793"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-whatsapp me-1"></i>
                                    +54 223 438-9793
                                </a>
                            </li>
                            
                          //  <li>
                            //    <Link to="/promo">
                             //       <i className="bi bi-stars me-1"></i>
                             //       Promo Club Mar Chiquita
                           //     </Link>
                        //    </li>
                        </ul>
                    </div>

                </div>

                <hr className="footer-divider" />

                <p style={{ textAlign: 'center', fontSize: '0.8rem', opacity: 0.65, margin: 0 }}>
                    © {currentYear} Mass Limpio. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}
