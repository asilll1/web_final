import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div className="text-center py-5">
                <h2>Your cart is empty</h2>
                <p className="text-muted">Start shopping to add items to your cart!</p>
                <Link to="/" className="btn btn-primary">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h2 className="mb-4">Shopping Cart</h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{ width: '50px', marginRight: '1rem' }}
                                    />
                                    <div>
                                        <h6 className="mb-0">{item.title}</h6>
                                        <small className="text-muted">{item.category}</small>
                                    </div>
                                </div>
                            </td>
                            <td>${item.price}</td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    style={{ width: '80px' }}
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                />
                            </td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end"><strong>Total:</strong></td>
                        <td><strong>${total.toFixed(2)}</strong></td>
                        <td></td>
                    </tr>
                    </tfoot>
                </table>
            </div>
            <div className="d-flex justify-content-end gap-3">
                <Link to="/" className="btn btn-outline-primary">
                    Continue Shopping
                </Link>
                <button className="btn btn-primary">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;