import "./CartProducts.css";
import Close from "../../assets/icons/Close";

const CartProducts: React.FC = () => {
    return (
        <div className="cart-products-wrapper">
            <div className="product-list">
                <div className="cart-product">
                    <img src="src/assets/images/apple.png" />
                    <div className="detail">
                        <p>Green Apple</p>
                        <p>
                            1 x <span>$14.20</span>
                        </p>
                    </div>
                    <Close className="hover" />
                </div>
                <hr></hr>
                <div className="cart-product">
                    <img src="src/assets/images/apple.png" />
                    <div className="detail">
                        <p>Green Apple</p>
                        <p>
                            1 x <span>$14.20</span>
                        </p>
                    </div>
                    <Close className="hover" />
                </div>
                <hr></hr>
            </div>
            <div className="product-total-wrapper">
                <span className="product-number">2 Products</span>
                <span className="product-total">$26.00</span>
            </div>
            <div className="checkout-buttons">
                <button className="checkout-button">Checkout</button>
                <button className="go-to-cart">Go To Cart</button>
            </div>
        </div>
    );
};

export default CartProducts;
