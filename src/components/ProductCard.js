import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <div className="card h-100">
            <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{height: '200px', objectFit: 'contain'}}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title.substring(0, 50)}...</h5>
                <p className="card-text flex-grow-1">{product.description.substring(0, 100)}...</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="h5 mb-0">${product.price}</span>
                    <Link
                        to={`/product/${product.id}`}
                        className="btn btn-primary"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;