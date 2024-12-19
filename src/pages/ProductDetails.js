import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.getProduct(id);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch product details');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;
    if (!product) return <div className="alert alert-info">Product not found</div>;

    return (
        <div className="row">
            <div className="col-md-6">
                <img src={product.image} alt={product.title} className="img-fluid" />
            </div>
            <div className="col-md-6">
                <h2>{product.title}</h2>
                <p className="text-muted">Category: {product.category}</p>
                <h3 className="text-primary">${product.price}</h3>
                <p>{product.description}</p>
                <button className="btn btn-primary btn-lg">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductDetails;