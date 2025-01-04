import { useState } from "react";
import Bag from "../../assets/icons/Bag";
import StarRating from "../StarRating/StarRating";
import "./Productcard.css";
import Heart from "../../assets/icons/Heart";

interface ProductCardInterface {
    onSale?: "new" | "sale" | "best" | "outOfStock";
    salePercent?: number;
    productImage: string;
    productName: string;
}

const Productcard: React.FC<ProductCardInterface> = ({
    onSale,
    productImage,
    productName,
    salePercent,
}) => {
    const [bagcolor, setBagColor] = useState<string>("#2C742F");

    const changeBagColor = () => {
        if (bagcolor === "#2C742F") {
            setBagColor("white");
        }
        if (bagcolor === "white") {
            setBagColor("#2C742F");
        }
    };

    return (
        <div
            onMouseEnter={changeBagColor}
            onMouseLeave={changeBagColor}
            className="product-card hover"
        >
            <img src={productImage} />
            {onSale && <SaleType salePercent={salePercent} saleType={onSale} />}
            <div className="fav-module">
                <span className="add-fav hover">
                    <Heart color={"#1a1a1a"} width="20" height="20" />
                </span>
            </div>
            <div className="product-card-details">
                <div className="product-card-name">
                    <p>{productName}</p>
                    <div className="product-card-price">
                        <div>
                            <span className="current-price">$14.99</span>
                            {onSale && onSale === "sale" && (
                                <span className="discounted-price">$20.99</span>
                            )}
                        </div>
                        <span className="add-cart hover">
                            <Bag color={bagcolor} width="20" height="20" />
                        </span>
                    </div>
                    <StarRating rating={4} />
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
