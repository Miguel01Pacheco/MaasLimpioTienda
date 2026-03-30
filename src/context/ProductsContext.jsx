import { createContext, useContext, useState, useEffect } from 'react';

export const ProductsContext = createContext({
    products: [],
    loading: true,
    error: null
});

// ============================================
// VERSIÓN DE LA APLICACIÓN
// Cambiar esto forzará a los usuarios a recargar
// y limpiar el caché y datos viejos (ej. carrito)
// ============================================
const APP_VERSION = "1.0.1";

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        const initializeApp = async () => {
            try {
                // 1. Validar la versión
                const currentVersion = localStorage.getItem('app_version');
                
                if (currentVersion !== APP_VERSION) {
                    // Verificamos en sessionStorage para evitar loop infinito en caso de falla
                    if (!sessionStorage.getItem(`reloaded_${APP_VERSION}`)) {
                        setUpdating(true);
                        
                        // Limpiar localStorage (Esto limpiará el carrito viejo y datos cacheados)
                        localStorage.clear();
                        
                        // Guardar nueva versión
                        localStorage.setItem('app_version', APP_VERSION);
                        sessionStorage.setItem(`reloaded_${APP_VERSION}`, 'true');
                        
                        // Forzar recarga para reiniciar toda la app limpia
                        window.location.reload(true);
                        return; // Detenemos la ejecución aquí
                    } else {
                        // Por si acaso falló la recarga
                        localStorage.setItem('app_version', APP_VERSION);
                    }
                }

                // 2. Fetch de datos externos con Timestamp para eludir cache
                const res = await fetch(`/data/products.json?ts=${Date.now()}`);
                if (!res.ok) {
                    throw new Error('Error al cargar la lista de productos');
                }
                
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error('Error cargando la aplicación:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        initializeApp();
    }, []);

    // Pantalla de carga mientras se actualizan los datos
    if (updating) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem', marginBottom: '1rem' }}>
                    <span className="visually-hidden">Actualizando...</span>
                </div>
                <h2 style={{ color: 'var(--ml-blue)', fontWeight: 'bold' }}>Actualizando datos...</h2>
                <p style={{ color: 'var(--ml-gray-600)' }}>Por favor esperá un momento, estamos cargando los últimos precios y productos.</p>
            </div>
        );
    }

    return (
        <ProductsContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductsContext.Provider>
    );
}

export function useProducts() {
    return useContext(ProductsContext);
}
