import "./index.css";

interface FarmerWrapperInterface {
    children: React.ReactNode;
}

const FarmerWrapper: React.FC<FarmerWrapperInterface> = ({ children }) => {
    return (
        <div className="farmer-wrapper">
            <div className="side-bar"></div>
            <div className="farmer-content">{children}</div>
        </div>
    );
};

export default FarmerWrapper;
