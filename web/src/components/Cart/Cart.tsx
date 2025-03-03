import { useQuery } from "@tanstack/react-query";
import Bag from "../../assets/icons/Bag";
import Heart from "../../assets/icons/Heart";
import "./Cart.css";
import Cart from "../../api/Cart";

const CartHeader: React.FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: [`cart summary`],
        queryFn: Cart.viewCart,
    });

    return (
        <div className="cart-header">
            <Heart width="32" height="32" />
            <div className="vl"></div>
            <div className="shopping-cart">
                <div className="bag-wrapper">
                    <Bag width="34" height="34" />
                    <>
                        {!isLoading && data.total_items > 0 && (
                            <div className="sup">{data.total_items}</div>
                        )}
                    </>
                </div>
                <div className="cart-text">
                    <p className="shopping-cart-text">Shopping Cart:</p>
                    <p className="current-currency">
                        {isLoading && <>ksh0.0</>}
                        {!isLoading && <>Ksh{data.total_price}</>}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartHeader;
