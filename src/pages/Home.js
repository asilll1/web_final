import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        category: '',
        minPrice: '',
        maxPrice: '',
        sort: '',
        limit: ''
    });

    // Fetch categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.getCategories();
                setCategories(response.data);
            } catch (err) {
                console.error('Failed to fetch categories:', err);
            }
        };
        fetchCategories();
    }, []);

    // Fetch products with filters
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                let response;
                if (filters.category) {
                    response = await api.getProductsByCategory(filters.category, {
                        sort: filters.sort,
                        limit: filters.limit
                    });
                } else {
                    response = await api.getAllProducts({
                        sort: filters.sort,
                        limit: filters.limit
                    });
                }

                let filteredProducts = response.data;

                // Apply price filters
                if (filters.minPrice) {
                    filteredProducts = filteredProducts.filter(
                        product => product.price >= Number(filters.minPrice)
                    );
                }
                if (filters.maxPrice) {
                    filteredProducts = filteredProducts.filter(
                        product => product.price <= Number(filters.maxPrice)
                    );
                }

                setProducts(filteredProducts);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, [filters]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div>
            <FilterBar
                filters={filters}
                setFilters={setFilters}
                categories={categories}
            />

            {products.length === 0 ? (
                <div className="alert alert-info">No products found matching your criteria.</div>
            ) : (
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

export default Home;