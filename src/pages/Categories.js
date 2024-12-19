import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import ProductCard from '../components/ProductCard';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.getCategories();
                setCategories(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch categories');
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            if (selectedCategory) {
                setLoading(true);
                try {
                    const response = await api.getProductsByCategory(selectedCategory);
                    setProducts(response.data);
                    setLoading(false);
                } catch (err) {
                    setError('Failed to fetch products');
                    setLoading(false);
                }
            }
        };

        fetchProductsByCategory();
    }, [selectedCategory]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="categories-page">
            <h2 className="mb-4">Categories</h2>
            <div className="btn-group mb-4">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {selectedCategory && (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products.map(product => (
                        <div key={product.id} className="col">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Categories;