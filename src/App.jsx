import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Category from './pages/Category'
import SearchResults from './pages/SearchResults'
import Cart from './pages/Cart'
import Promo from './pages/Promo'
import NotFound from './pages/NotFound'

/**
 * App — Define el árbol de rutas de la aplicación.
 * CartProvider ya está montado en main.jsx, por encima de App.
 */
export default function App() {
    return (
        <BrowserRouter>
            <div className="d-flex flex-column min-vh-100">
                <Header />

                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/categoria/:slug" element={<Category />} />
                        <Route path="/buscar" element={<SearchResults />} />
                        <Route path="/carrito" element={<Cart />} />
                        <Route path="/promo" element={<Promo />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    )
}
