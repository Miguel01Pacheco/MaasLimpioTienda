import { useNavigate } from 'react-router-dom'

/**
 * Categorías disponibles en la tienda.
 * slug → usado en la URL (/categoria/:slug)
 * label → nombre visible al usuario
 * icon → Bootstrap Icon class
 */
const CATEGORIES = [
    { slug: 'lavado', label: 'Lavado', icon: 'bi-water' },
    { slug: 'limpieza-del-hogar', label: 'Limpieza del Hogar', icon: 'bi-house-heart' },
    { slug: 'piscinas', label: 'Piscinas', icon: 'bi-droplet-half' },
    { slug: 'linea-a-granel', label: 'Línea a Granel', icon: 'bi-bag' },
    { slug: 'linea-dclod', label: 'Línea Dclod', icon: 'bi-award' },
    { slug: 'variedad', label: 'Variedad', icon: 'bi-grid' },
]

/**
 * CategoryMenu — Dropdown de Bootstrap con las categorías de la tienda.
 * @param {function} onNavigate — callback para cerrar el menú móvil al navegar
 */
export default function CategoryMenu({ onNavigate }) {
    const navigate = useNavigate()

    const handleSelect = (slug) => {
        navigate(`/categoria/${slug}`)
        if (onNavigate) onNavigate()
    }

    return (
        <div className="dropdown category-dropdown">
            <button
                className="btn dropdown-toggle d-flex align-items-center gap-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="categoriesDropdown"
            >
                <i className="bi bi-grid-3x3-gap-fill"></i>
                Categorías
            </button>

            <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                {CATEGORIES.map(({ slug, label, icon }) => (
                    <li key={slug}>
                        <button
                            className="dropdown-item d-flex align-items-center gap-2"
                            onClick={() => handleSelect(slug)}
                        >
                            <i className={`bi ${icon} text-blue`}></i>
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Exportamos las categorías para reutilizarlas en otras páginas
export { CATEGORIES }
