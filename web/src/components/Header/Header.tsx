import Logo from "../../assets/icons/Logo";
import MapPin from "../../assets/icons/map-pin";
import CartHeader from "../Cart/Cart";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header: React.FC = () => {
    return (
        <div className="main-header">
            <div className="prompt-wrapper">
                <div className="location-wrap">
                    <MapPin width={"15"} height="18" />
                    <span className="location">
                        Store Location: Lincoln- 344, Illinois, Chicago, USA
                    </span>
                </div>
                <div className="sign-prompt">
                    <span>Sign In</span> / <span>Sign Up</span>
                </div>
            </div>
            <div className="logo-navigation">
                <Logo width="183" height="38" />
                <SearchBar />
                <CartHeader />
            </div>
            <NavBar />
        </div>
    );
};

export default Header;
