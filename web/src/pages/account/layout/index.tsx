import SideBar from "../../../components/SideBar/SideBar";
import "./index.css";

interface AccountLayoutInterface {
    children: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutInterface> = ({ children }) => {
    return (
        <div className="account">
            <div className="account-side-bar">
                <SideBar />
            </div>
            <div className="account-children">{children}</div>
        </div>
    );
};

export default AccountLayout;
