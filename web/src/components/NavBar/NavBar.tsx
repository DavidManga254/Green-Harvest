import "./NavBar.css";
import ChevronDown from "../../assets/icons/ChevronDown";
import { Link, useNavigate } from "@tanstack/react-router";

const NavBar: React.FC = () => {
    const navigate = useNavigate();

    const navigateToRoute = (routeName: string) => navigate({ to: routeName });

    return (
        <div className="navbar-wrapper">
            <div className="navigation">
                <div className="nav-item active">
                    <span>Home</span>
                    <ChevronDown height="16" width="16" />
                </div>
                <div className="nav-item inactive">
                    <span onClick={() => navigateToRoute("/shop")}>Shop</span>
                    <ChevronDown height="16" width="16" />
                </div>
                <div className="nav-item inactive">
                    <Link to={"/about"}>
                        <span>About Us</span>
                    </Link>
                    <ChevronDown height="16" width="16" />
                </div>
                <div className="nav-item inactive">
                    <Link to={"/contact-us"}>
                        <span>Contact Us</span>
                    </Link>
                    <ChevronDown height="16" width="16" />
                </div>
            </div>
            <div className="contact"></div>
        </div>
    );
};

export default NavBar;
