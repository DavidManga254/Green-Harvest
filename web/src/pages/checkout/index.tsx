import { useState } from "react";
import "./index.css";

const CheckoutPage: React.FC = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            name: "Green Capsicum",
            price: 14.0,
            quantity: 5,
            image: "https://via.placeholder.com/60",
        },
        {
            id: 2,
            name: "Red Capsicum",
            price: 14.0,
            quantity: 1,
            image: "https://via.placeholder.com/60",
        },
    ]);

    const handleIncrease = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        );
    };

    const handleDecrease = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
            ),
        );
    };

    const handleRemove = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <div className="checkout-page">
            <div className="checkout-title">
                <h2>My Shopping Cart</h2>
            </div>
            <div className="checkout section">
                <div className="cart-list">
                    <div className="cart">
                        <div className="cart-header">
                            <span>Product</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Subtotal</span>
                            <span></span>
                        </div>
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-details">
                                    <div className="cart-item-title">
                                        {item.name}
                                    </div>
                                    <div className="cart-item-price">
                                        ${item.price.toFixed(2)}
                                    </div>
                                </div>
                                <div className="cart-quantity">
                                    <button
                                        onClick={() => handleDecrease(item.id)}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => handleIncrease(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="cart-subtotal">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                                <button
                                    className="cart-remove"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                        <div className="extra-buttons">
                            <button>Return to shop</button>
                        </div>
                    </div>
                    <div className="checkout-total">
                        <h2>Cart Total</h2>
                        <div className="checkout-section">
                            <label>Subtotal:</label>
                            <span>Ksh84.00</span>
                        </div>
                        <div className="checkout-section">
                            <label>Shipping:</label>
                            <span>Ksh84.00</span>
                        </div>
                        <div className="checkout-section">
                            <label>Total:</label>
                            <span>Ksh84.00</span>
                        </div>
                        <button>Proceed to checkout</button>
                    </div>
                </div>
                <div className="bill-section"></div>
            </div>
        </div>
    );
};

export default CheckoutPage;
