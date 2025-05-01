import { useState } from "react";
import Bag from "../../assets/icons/Bag";
import StarRating from "../StarRating/StarRating";
import "./Productcard.css";
import Heart from "../../assets/icons/Heart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cart from "../../api/Cart";
import displayNotification from "../../lib/displayNotification";
import { toast } from "react-toastify";

interface ProductCardInterface extends React.HTMLAttributes<HTMLElement> {
    onSale?: "new" | "sale" | "best" | "outOfStock";
    salePercent?: number;
    productImage: string;
    productName: string;
    price: string | number;
    rating: number;
    id: number;
    onUserClick: () => void;
}

const Productcard: React.FC<ProductCardInterface> = ({
    onSale,
    productImage,
    productName,
    salePercent,
    price,
    rating,
    id,
    onUserClick,
}) => {
    const queryClient = useQueryClient();

    const [bagcolor, setBagColor] = useState<string>("#2C742F");

    const changeBagColor = () => {
        if (bagcolor === "#2C742F") {
            setBagColor("white");
        }
        if (bagcolor === "white") {
            setBagColor("#2C742F");
        }
    };

    const cartMutation = useMutation({
        mutationFn: Cart.addToCart,
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ["cart summary"] });
            displayNotification("Added to cart", "success");
        },
        onError: () => {
            displayNotification("Failed to add to cart", "error");
        },
    });

    const handleAddtoCart = () => {
        cartMutation.mutate({
            produceId: id,
            quantity: 1,
        });
    };
    return (
        <div
            onMouseEnter={changeBagColor}
            onMouseLeave={changeBagColor}
            className="product-card hover"
        >
            <img onClick={onUserClick} src={productImage} />
            {onSale && <SaleType salePercent={salePercent} saleType={onSale} />}
            <div className="fav-module">
                <span className="add-fav hover">
                    <Heart color={"#1a1a1a"} width="20" height="20" />
                </span>
            </div>
            <div className="product-card-details">
                <div className="product-card-name">
                    <p onClick={onUserClick}>{productName}</p>
                    <div className="product-card-price">
                        <div onClick={onUserClick}>
                            <span className="current-price">{price}</span>
                            {onSale && onSale === "sale" && (
                                <span className="discounted-price">$20.99</span>
                            )}
                        </div>
                        <span className="add-cart hover">
                            <Bag
                                onClick={handleAddtoCart}
                                color={bagcolor}
                                width="20"
                                height="20"
                            />
                        </span>
                    </div>
                    <StarRating rating={rating} />
                </div>
            </div>
        </div>
    );
};

export default Productcard;

interface SaleTypeInterface {
    saleType: "new" | "sale" | "best" | "outOfStock";
    salePercent?: number;
}

const SaleType: React.FC<SaleTypeInterface> = ({ saleType, salePercent }) => {
    let className = "";
    let label = "";

    switch (saleType) {
        case "best": {
            className = "best-sale";
            label = "Best Sale";
            break;
        }
        case "sale": {
            className = "discount-sale";
            label = `Sale ${salePercent}%`;
            break;
        }
        case "new": {
            className = "new-sale";
            label = "New";
            break;
        }
        case "outOfStock": {
            className = "out-of-stock-sale";
            label = "Out of stock";
            break;
        }
    }

    return <span className={`${className} card-label`}>{label}</span>;
};
