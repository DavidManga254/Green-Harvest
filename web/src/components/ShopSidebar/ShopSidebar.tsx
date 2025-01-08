import PropmtArrow from "../../assets/icons/PromptArrow";
import StarRating from "../StarRating/StarRating";
import "./ShopSidebar.css";

const ShopSidebar: React.FC = () => {
    return (
        <div className="shop-side-bar">
            <form>
                <div className="categories">
                    <div className="title">
                        <h1>All Categories</h1>
                    </div>
                    <div className="options">
                        <div className="option-section">
                            <input type="radio" name="category" />
                            <label>
                                Fresh Fruit <span>(134)</span>
                            </label>
                        </div>
                        <div className="option-section">
                            <input type="radio" name="category" />
                            <label>
                                Vegetable <span>(14)</span>
                            </label>
                        </div>
                        <div className="option-section">
                            <input type="radio" name="category" />
                            <label>
                                Cooking <span>(45)</span>
                            </label>
                        </div>
                        <div className="option-section">
                            <input type="radio" name="category" />
                            <label>
                                Snacks <span>(47)</span>
                            </label>
                        </div>
                        <div className="option-section">
                            <input type="radio" name="category" />
                            <label>
                                Beverages <span>(38)</span>
                            </label>
                        </div>
                        <div className="option-section">
                            <input type="radio" name="category" />
                            <label>
                                Bread & Bakery<span>(18)</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="rating">
                    <div className="title">
                        <h1>Rating</h1>
                    </div>
                    <div className="options">
                        <div className="option-section">
                            <input type="checkbox" name="rating" />
                            <StarRating rating={5} />
                            <label>5.0 & up</label>
                        </div>
                        <div className="option-section">
                            <input type="checkbox" name="rating" />
                            <StarRating rating={4} />
                            <label>4.0 & up</label>
                        </div>
                        <div className="option-section">
                            <input type="checkbox" name="rating" />
                            <StarRating rating={3} />
                            <label>3.0 & up</label>
                        </div>
                        <div className="option-section">
                            <input type="checkbox" name="rating" />
                            <StarRating rating={2} />
                            <label>2.0 & up</label>
                        </div>
                        <div className="option-section">
                            <input type="checkbox" name="rating" />
                            <StarRating rating={1} />
                            <label>1.0 & up</label>
                        </div>
                    </div>
                </div>
                <div className="tags">
                    <div className="title">
                        <h1>Popular Tag</h1>
                    </div>
                    <div className="popular-tag-list">
                        <span>Healthy</span>
                        <span>Low fat</span>
                        <span>vegeterian</span>
                        <span>Kid foods</span>
                        <span>Vitamins</span>
                        <span>Bread</span>
                        <span>Meat</span>
                        <span>Snacks</span>
                        <span>Tiffin</span>
                        <span>Launch</span>
                    </div>
                </div>
                <div className="discount-offer">
                    <div className="discount-text">
                        <p>
                            <span>79%</span> Discount
                        </p>
                        <p className="small">on your first order</p>
                    </div>
                    <p className="prompt-shop">
                        Shop Now <PropmtArrow width="15" height="12" />{" "}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default ShopSidebar;
