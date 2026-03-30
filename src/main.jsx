import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ProductsProvider } from './context/ProductsContext.jsx'

// Bootstrap CSS y Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Estilos personalizados (sobreescribe Bootstrap donde sea necesario)
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ProductsProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </ProductsProvider>
    </React.StrictMode>
)

