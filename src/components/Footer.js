import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>UCA Store</h5>
                        <p className="text-muted">Your one-stop shop for quality products.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-light">Home</Link></li>
                            <li><Link to="/categories" className="text-light">Categories</Link></li>
                            <li><Link to="/cart" className="text-light">Cart</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <p className="text-muted">
                            Email: contact@ucastore.com<br />
                            Phone: (123) 456-7890<br />
                            Address: 123 UCA Street, Bishkek
                        </p>
                    </div>
                </div>
                <hr className="bg-light" />
                <div className="text-center text-muted">
                    <small>&copy; 2024 UCA Store. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;