import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import SearchBar from './SearchBar'
import CategoryMenu from './CategoryMenu'

/**
 * Header — Barra de navegación principal sticky.
 * Desktop: logo | categorías | promo | buscador | carrito
 * Mobile: logo | carrito | hamburguesa → menú vertical
 */
export default function Header() {
    const { totalItems } = useCart()
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className="header sticky-top">
            <nav className="navbar navbar-expand-lg">
                <div className="container">

                    {/* ── Logo ── */}
                    <Link className="navbar-brand" to="/" onClick={closeMenu}>
                        <img
                            src="/imagenes/logo-mass-sin-fondo.png"
                            alt="Mass Limpio"
                            style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
                        />
                    </Link>

                    {/* ── Mobile: carrito + toggler ── */}
                    <div className="d-flex align-items-center gap-3 d-lg-none">
                        <Link to="/carrito" className="cart-btn" onClick={closeMenu}>
                            <i className="bi bi-cart3 fs-5"></i>
                            {totalItems > 0 && (
                                <span className="cart-badge">{totalItems}</span>
                            )}
                        </Link>
                        <button
                            className="navbar-toggler border-0"
                            type="button"
                            aria-label="Abrir menú"
                            onClick={() => setMenuOpen(prev => !prev)}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    {/* ── Nav principal ── */}
                    <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
                        <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 gap-lg-3 w-100 mt-3 mt-lg-0">

                            {/* Categorías */}
                            <CategoryMenu onNavigate={closeMenu} />

                            {/* Promo */}
                            {/*
                            <Link
                                to="/promo"
                                className="nav-promo-link"
                                onClick={closeMenu}
                            >
                                <i className="bi bi-stars me-1"></i>
                                Club Mar Chiquita
                            </Link>
                            */}
                            {/* Buscador */}
                            <div className="flex-lg-grow-1 d-flex justify-content-lg-center w-100">
                                <SearchBar onSearch={closeMenu} />
                            </div>

                            {/* Carrito desktop */}
                            <Link
                                to="/carrito"
                                className="cart-btn d-none d-lg-flex align-items-center gap-1 text-nowrap"
                                onClick={closeMenu}
                            >
                                <i className="bi bi-cart3 fs-5"></i>
                                <span className="fw-600 d-none d-xl-inline" style={{ fontSize: '0.9rem' }}>
                                    Carrito
                                </span>
                                {totalItems > 0 && (
                                    <span className="cart-badge">{totalItems}</span>
                                )}
                            </Link>

                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}
