import "./SideBar.css";
import Dashboard from "../../assets/icons/Dashboard";
import Order from "../../assets/icons/order";
import Heart from "../../assets/icons/Heart";
import Bag from "../../assets/icons/Bag";
import Settings from "../../assets/icons/settings";
import Logout from "../../assets/icons/logout";

const SideBar: React.FC = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="nav-title">
                <span>Navigation</span>
            </div>
            <div className="side-item active-nav">
                <Dashboard width="24" height="24" />
                <span>Dashboard</span>
            </div>
            <div className="side-item">
                <Order width="24" height="24" />
                <span>order History</span>
            </div>
            <div className="side-item">
                <Heart width="24" height="24" />
                <span>Wishlist</span>
            </div>
            <div className="side-item">
                <Bag width="24" height="24" />
                <span>Shoppping Cart</span>
            </div>
            <div className="side-item">
                <Settings width="24" height="24" />
                <span>Settings</span>
            </div>
            <div className="side-item">
                <Logout width="24" height="24" />
                <span>Log-out</span>
            </div>
        </div>
    );
};

export default SideBar;
