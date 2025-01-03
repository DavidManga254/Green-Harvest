import Bag from "../../assets/icons/Bag";
import Heart from "../../assets/icons/Heart";
import "./Cart.css";

const CartHeader: React.FC = () => {
    return (
        <div className="cart-header">
            <Heart width="32" height="32" />
            <div className="vl"></div>
            <div className="shopping-cart">
                <div className="bag-wrapper">
                    <Bag width="34" height="34" />
                    <div className="sup">23</div>
                </div>
                <div className="cart-text">
                    <p className="shopping-cart-text">Shopping Cart:</p>
                    <p className="current-currency">$57.00</p>
                </div>
            </div>
        </div>
    );
};

export default CartHeader;
