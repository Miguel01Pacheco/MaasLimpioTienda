import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * SearchBar — Input de búsqueda de productos.
 * Al enviar, navega a /buscar?q=<término>.
 * @param {function} onSearch — callback opcional (ej: cerrar menú móvil)
 */
export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const trimmed = query.trim()
        if (!trimmed) return
        navigate(`/buscar?q=${encodeURIComponent(trimmed)}`)
        if (onSearch) onSearch()
    }

    return (
        <form className="search-form" onSubmit={handleSubmit} role="search">
            <input
                type="search"
                className="search-input"
                placeholder="Buscar productos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Buscar productos"
                id="searchInput"
            />
            <button type="submit" className="search-btn" aria-label="Buscar">
                <i className="bi bi-search"></i>
            </button>
        </form>
    )
}
