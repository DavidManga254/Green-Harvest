import CartHeader from "../Cart/Cart";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header: React.FC = () => {
    return (
        <div className="main-header">
            <div className="prompt-wrapper">
                <div className="location-wrap"></div>
                <div className="sign-prompt">
                    <span>Sign In</span> / <span>Sign Up</span>
                </div>
            </div>
            <div className="logo-navigation">
                <h1 style={{ color: "green" }}>ShambaBox</h1>
                <SearchBar />
                <CartHeader />
            </div>
            <NavBar />
        </div>
    );
};

export default Header;
