import "./index.css";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import { Link } from "@tanstack/react-router";

interface FarmerWrapperInterface {
    children: React.ReactNode;
}

const FarmerWrapper: React.FC<FarmerWrapperInterface> = ({ children }) => {
    return (
        <div className="farmer-wrapper">
            <div className="side-bar">
                <div className="side-title">Green Harvest</div>
                <div className="side-nav">
                    <Link to="/farmer/dashboard">
                        <div className="side-item active">
                            <GridViewOutlinedIcon />
                            <p>Overview</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="side-item">
                            <CheckBoxOutlineBlankOutlinedIcon />
                            <p>Product</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="side-item">
                            <PeopleAltOutlinedIcon />
                            <p>Customer</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="side-item">
                            <ExploreOutlinedIcon />
                            <p>Shipment</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="side-item">
                            <HelpOutlineOutlinedIcon />
                            <p>Help & Support</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="farmer-content">{children}</div>
        </div>
    );
};

export default FarmerWrapper;
