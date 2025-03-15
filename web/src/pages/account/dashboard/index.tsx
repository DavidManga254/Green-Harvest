import OrderHistory from "../../../components/OrderHistory";
import "./index.css";

const DashboardPage: React.FC = () => {
    return (
        <div className="dashboard-page">
            <div className="top">
                <div className="user">
                    <div className="user-profile">
                        <img src="/src/assets/images/image.png" />
                        <h2>Dianne Russell</h2>
                        <h4>Customer</h4>
                        <span className="edit-profile">Edit Profile</span>
                    </div>
                </div>
                <div className="user-address">
                    <h1>BILLING ADDRESS</h1>
                    <div>
                        <h2>Dainne Russell</h2>
                        <p className="address">
                            4140 Parker Rd. Allentown, New Mexico 31134
                        </p>
                        <p className="email">dainne.ressell@gmail.com</p>
                        <p className="number">(671) 555-0110</p>
                    </div>
                    <span>Edit Address</span>
                </div>
            </div>
            <OrderHistory />
        </div>
    );
};

export default DashboardPage;
