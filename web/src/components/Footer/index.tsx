import MasterCard from "../../assets/icons/Mastercard";
import Plant from "../../assets/icons/Plant";
import SecurePayment from "../../assets/icons/SecurePayment";
import Visa from "../../assets/icons/Visa";
import "./index.css";

const Footer: React.FC = () => {
    const year = new Date().getFullYear().toString();

    return (
        <div className="footer-section">
            <div className="nav-section">
                <div className="brand-section">
                    <h1>
                        <Plant /> Green Harvest
                    </h1>
                    <p>
                        Morbi cursus porttitor enim lobortis molestie. Duis
                        gravida turpis dui, eget bibendum magna congue nec.
                    </p>
                    <p>
                        <span>(219) 555-0114</span> or{" "}
                        <span>Proxy@gmail.com</span>
                    </p>
                </div>

                <div className="footer-account-section">
                    <h1>My Account</h1>
                    <ul>
                        <li>My Account</li>
                        <li>Order History</li>
                        <li>Shopping Cart</li>
                    </ul>
                </div>

                <div className="footer-account-section">
                    <h1>Help</h1>
                    <ul>
                        <li>Contact</li>
                        <li>Faqs</li>
                        <li>Terms & Condition</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-account-section">
                    <h1>Proxy</h1>
                    <ul>
                        <li>About</li>
                        <li>Shop</li>
                    </ul>
                </div>
            </div>
            <div className="bottom-footer">
                <span>Ecobazar eCommerce © {year}. All Rights Reserved</span>
                <div className="support-payments">
                    <Visa />
                    <MasterCard />
                    <SecurePayment />
                </div>
            </div>
        </div>
    );
};

export default Footer;
