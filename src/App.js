import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Categories from './pages/Categories';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <div className="App d-flex flex-column min-vh-100">
                        <Navbar />
                        <main className="flex-grow-1">
                            <div className="container py-4">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/product/:id" element={<ProductDetails />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/categories" element={<Categories />} />
                                </Routes>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;