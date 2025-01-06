import { useState } from "react";
import Instagram from "../../assets/icons/instagram";
import Twitter from "../../assets/icons/twitter";
import StarRating from "../StarRating/StarRating";
import "./ProductDetail.css";
import Minus from "../../assets/icons/Minus";
import Plus from "../../assets/icons/plus";
import Bag from "../../assets/icons/Bag";
import Heart from "../../assets/icons/Heart";
import ImagePreview from "../ImagePreview/ImagePreview";

interface ProductDetailHeaderinterface {
    name: string;
    rating: number;
    price_per_unit: number | string;
    is_on_sale: number;
    description: string;
    category: {
        id: number;
        name: string;
    };
    images: {
        image_path: string;
    }[];
}

const ProductDetailHeader: React.FC<ProductDetailHeaderinterface> = ({
    name,
    rating,
    price_per_unit,
    is_on_sale,
    description,
    category,
    images,
}) => {
    const productImages = images.map((image) => image.image_path);

    return (
        <div className="product-detail-header">
            <div className="product-preview">
                <ImagePreview imagesUrl={productImages} />
            </div>
            <div className="product-detail-info">
                <div className="detail-header">
                    <div className="product-title">
                        <h1>{name}</h1>
                        <StockStatus inStock />
                    </div>
                    <div className="review-section-start">
                        <div className="review">
                            <StarRating rating={rating} />
                            <span>4 Reviews</span>
                        </div>
                    </div>
                    <div className="product-price">
                        <span className="old-price">${price_per_unit}</span>
                        <span className="discounted-price">$17.28</span>
                        <PercentageOff percent={64} />
                    </div>
                </div>

                {/* share section */}
                <div className="share-section">
                    <div className="share-buttons">
                        <span>Share item: </span>
                        <span>
                            <Twitter height="18" width="18" />
                        </span>
                        <span>
                            <Instagram height="18" width="18" />
                        </span>
                    </div>
                </div>
                {/* product description */}
                <div className="product-description">
                    <p>{description}</p>
                </div>
                <div className="product-prompt">
                    <Counter onCountChange={() => {}} />
                    <button className="add-to-cart">
                        <div>
                            Add to Cart{""}
                            <Bag color="white" width="15" height="15" />
                        </div>
                    </button>
                    <span className="add-fav hover">
                        <Heart color="#2C742F" width="20" height="20" />
                    </span>
                </div>
                <div className="product-categories">
                    <div className="category">
                        <span className="name">Category:</span>
                        <span className="category-name">{category.name}</span>
                        {/* TODO  make category backend own table and map*/}
                        {/* <div>
                            {category.map((category, index) => (
                                <span key={index} className="category-name">
                                    {category.name}
                                </span>
                            ))}
                        </div> */}
                    </div>
                    <div className="tag">
                        <span className="name">Tag:</span>
                        <div>
                            <span className="tag-name">Vegetables</span>
                            <span className="tag-name">Healthy</span>
                            <span className="tag-name">Chinese</span>
                            <span className="tag-name">Cabbage</span>
                            <span className="tag-name">Green Cabbage</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailHeader;

interface StockStatusInterface {
    inStock: boolean;
}

const StockStatus: React.FC<StockStatusInterface> = ({ inStock }) => (
    <span className={`stock-card ${inStock ? "in-stock" : "out-stock"}`}>
        {inStock ? "In Stock" : "Out of Stock"}
    </span>
);

interface PercentageOffInterface {
    percent: number;
}
const PercentageOff: React.FC<PercentageOffInterface> = ({ percent }) => (
    <div className="percentage-off">{percent}% Off</div>
);

type CounterProps = {
    onCountChange: (count: number) => void;
};

const Counter: React.FC<CounterProps> = ({ onCountChange }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        onCountChange(newCount);
    };

    const handleDecrement = () => {
        const newCount = count - 1;
        if (newCount <= 0) {
            setCount(0);
        } else {
            setCount(newCount);
        }
        onCountChange(newCount);
    };

    return (
        <div className="add-minus-button">
            <button className="inc" onClick={handleDecrement}>
                <Minus color="black" />
            </button>
            <span>{count}</span>
            <button className="inc" onClick={handleIncrement}>
                <Plus />{" "}
            </button>
        </div>
    );
};
