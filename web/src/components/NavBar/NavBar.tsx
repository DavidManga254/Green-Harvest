import "./NavBar.css";
import ChevronDown from "../../assets/icons/ChevronDown";

const NavBar: React.FC = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navigation">
                <div className="nav-item active">
                    <span>Home</span>
                    <ChevronDown height="16" width="16" />
                </div>
                <div className="nav-item inactive">
                    <span>Shop</span>
                    <ChevronDown height="16" width="16" />
                </div>
                <div className="nav-item inactive">
                    <span>Pages</span>
                    <ChevronDown height="16" width="16" />
                </div>
                <div className="nav-item inactive">
                    <span>About Us</span>
                    <ChevronDown height="16" width="16" />
                </div>
                <div className="nav-item inactive">
                    <span>Contact Us</span>
                    <ChevronDown height="16" width="16" />
                </div>
            </div>
            <div className="contact"></div>
        </div>
    );
};

export default NavBar;
