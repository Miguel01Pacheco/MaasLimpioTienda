import { Link } from 'react-router-dom'

/**
 * NotFound — Página 404.
 * Se muestra cuando ninguna ruta del router coincide.
 */
export default function NotFound() {
    return (
        <div className="container not-found">
            <div>
                <div className="error-code">404</div>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--ml-text)', marginBottom: '12px' }}>
                    Página no encontrada
                </h1>
                <p style={{ color: 'var(--ml-gray-600)', maxWidth: '400px', margin: '0 auto 28px' }}>
                    La página que buscás no existe o fue movida.
                    Volvé al inicio y encontrá lo que necesitás.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/" className="btn btn-primary rounded-pill px-4 py-2">
                        <i className="bi bi-house me-1"></i>
                        Ir al inicio
                    </Link>
                    <Link to="/carrito" className="btn btn-outline-primary rounded-pill px-4 py-2">
                        <i className="bi bi-cart3 me-1"></i>
                        Ver carrito
                    </Link>
                </div>
            </div>
        </div>
    )
}
