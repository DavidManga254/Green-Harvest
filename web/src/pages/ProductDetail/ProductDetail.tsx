import "./ProductDetail.css";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import Produce from "../../api/Produce";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { useState } from "react";
import StarRating from "../../components/StarRating/StarRating";
import Productcard from "../../components/ProductCard/ProductCard";

interface ProductDetailInterface {
    productId: number | string;
}

const ProductDetailPage: React.FC<ProductDetailInterface> = ({ productId }) => {
    const navigate = useNavigate();

    const { data, error, isLoading } = useQuery({
        queryKey: [`Product${productId}`, productId],
        queryFn: ({ queryKey }) => {
            const [, productId] = queryKey;

            return Produce.getProductDetails(productId);
        },
    });

    const handleProductNavigation = (productId: number | string) => {
        navigate({ to: `/product/${productId}` });
    };

    if (isLoading) {
        return <h1>isLoading</h1>;
    }

    if (error) {
        return <h1>error</h1>;
    }

    const productData = data.data;

    const relatedProduce = [
        {
            id: 1,
            name: "Apple",
            price_per_unit: "53.06",
            is_on_sale: 1,
            discount: "15.77",
            out_of_stock: 1,
            rating: 0.8,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxBcHBsZXxlbnwwfHx8fDE3NDAzMzczODR8MA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 2,
            name: "Banana",
            price_per_unit: "70.61",
            is_on_sale: 0,
            discount: null,
            out_of_stock: 0,
            rating: 4.24,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxCYW5hbmF8ZW58MHx8fHwxNzQwMzM3Mzg4fDA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 3,
            name: "Orange",
            price_per_unit: "44.45",
            is_on_sale: 0,
            discount: "28.94",
            out_of_stock: 0,
            rating: 0.05,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxPcmFuZ2V8ZW58MHx8fHwxNzQwMzM3MzkxfDA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 4,
            name: "Grapes",
            price_per_unit: "21.36",
            is_on_sale: 1,
            discount: null,
            out_of_stock: 0,
            rating: 3.52,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1596363505729-4190a9506133?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxHcmFwZXN8ZW58MHx8fHwxNzQwMzM3Mzk2fDA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 5,
            name: "Pineapple",
            price_per_unit: "56.21",
            is_on_sale: 1,
            discount: "16.21",
            out_of_stock: 1,
            rating: 0.24,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxQaW5lYXBwbGV8ZW58MHx8fHwxNzQwMzM3NDAwfDA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 6,
            name: "Carrot",
            price_per_unit: "4.44",
            is_on_sale: 1,
            discount: null,
            out_of_stock: 0,
            rating: 1.21,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxDYXJyb3R8ZW58MHx8fHwxNzQwMzM3NDA0fDA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 7,
            name: "Potato",
            price_per_unit: "88.48",
            is_on_sale: 0,
            discount: "7.60",
            out_of_stock: 0,
            rating: 3.38,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxQb3RhdG98ZW58MHx8fHwxNzQwMzM3NDA4fDA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 8,
            name: "Broccoli",
            price_per_unit: "21.14",
            is_on_sale: 0,
            discount: "17.98",
            out_of_stock: 0,
            rating: 1.19,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxCcm9jY29saXxlbnwwfHx8fDE3NDAzMzc0MTJ8MA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 9,
            name: "Spinach",
            price_per_unit: "30.08",
            is_on_sale: 1,
            discount: null,
            out_of_stock: 1,
            rating: 1.24,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxTcGluYWNofGVufDB8fHx8MTc0MDMzNzQxNnww&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 10,
            name: "Tomato",
            price_per_unit: "88.00",
            is_on_sale: 1,
            discount: null,
            out_of_stock: 0,
            rating: 0.86,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxUb21hdG98ZW58MHx8fHwxNzQwMzM3NDIwfDA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 11,
            name: "Milk",
            price_per_unit: "79.16",
            is_on_sale: 0,
            discount: null,
            out_of_stock: 0,
            rating: 0.85,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxNaWxrfGVufDB8fHx8MTc0MDMzNzQyNXww&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 12,
            name: "Cheese",
            price_per_unit: "11.06",
            is_on_sale: 0,
            discount: null,
            out_of_stock: 1,
            rating: 1.63,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxDaGVlc2V8ZW58MHx8fHwxNzQwMzM3NDI4fDA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 13,
            name: "Yogurt",
            price_per_unit: "86.03",
            is_on_sale: 0,
            discount: "11.65",
            out_of_stock: 0,
            rating: 3.57,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1571212515416-fef01fc43637?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxZb2d1cnR8ZW58MHx8fHwxNzQwMzM3NDMxfDA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 14,
            name: "Butter",
            price_per_unit: "75.26",
            is_on_sale: 1,
            discount: null,
            out_of_stock: 0,
            rating: 2.48,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxCdXR0ZXJ8ZW58MHx8fHwxNzQwMzM3NDM2fDA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 15,
            name: "Cream",
            price_per_unit: "47.89",
            is_on_sale: 0,
            discount: "11.33",
            out_of_stock: 0,
            rating: 0.75,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1608068811588-3a67006b7489?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxDcmVhbXxlbnwwfHx8fDE3NDAzMzc0Mzl8MA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 16,
            name: "Chicken",
            price_per_unit: "70.34",
            is_on_sale: 0,
            discount: "28.23",
            out_of_stock: 0,
            rating: 4.56,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1556316918-880f9e893822?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxDaGlja2VufGVufDB8fHx8MTc0MDMzNzQ0M3ww&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 17,
            name: "Beef",
            price_per_unit: "7.79",
            is_on_sale: 0,
            discount: null,
            out_of_stock: 0,
            rating: 1.92,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxCZWVmfGVufDB8fHx8MTc0MDMzNzQ0NXww&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 18,
            name: "Lamb",
            price_per_unit: "81.48",
            is_on_sale: 1,
            discount: null,
            out_of_stock: 1,
            rating: 3.44,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1535979863199-3c77338429a0?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxMYW1ifGVufDB8fHx8MTc0MDMzNzQ0OHww&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 19,
            name: "Pork",
            price_per_unit: "59.25",
            is_on_sale: 1,
            discount: "20.65",
            out_of_stock: 0,
            rating: 0.21,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxQb3JrfGVufDB8fHx8MTc0MDMzNzQ1MXww&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 20,
            name: "Turkey",
            price_per_unit: "42.18",
            is_on_sale: 1,
            discount: "6.71",
            out_of_stock: 1,
            rating: 4.84,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxUdXJrZXl8ZW58MHx8fHwxNzQwMzM3NDU1fDA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
        {
            id: 21,
            name: "Salmon",
            price_per_unit: "35.24",
            is_on_sale: 1,
            discount: null,
            out_of_stock: 1,
            rating: 2.42,
            images: {
                image_path:
                    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=M3w2OTM2MjZ8MHwxfHNlYXJjaHwxfHxTYWxtb258ZW58MHx8fHwxNzQwMzM3NDU4fDA&ixlib=rb-4.0.3&w=500&h=332&fit=crop",
            },
        },
    ];

    const randomItems = [...relatedProduce]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    return (
        <div className="product-detail-wrapper">
            <div className="product-detail-section">
                <ProductDetail
                    category={productData.category}
                    description={productData.description}
                    images={productData.images}
                    is_on_sale={productData.is_on_sale}
                    name={productData.name}
                    price_per_unit={productData.price_per_unit}
                    rating={productData.rating}
                />
                <ProductMoreDetail />
                <div className="related-section">
                    <h1>Related Products</h1>
                    <div className="related-section-list">
                        {randomItems.map((produce, index: number) => (
                            <Productcard
                                onUserClick={() =>
                                    handleProductNavigation(produce.id)
                                }
                                productImage={
                                    produce.images
                                        ? produce.images.image_path
                                        : ""
                                }
                                productName={produce.name}
                                onSale={produce.is_on_sale}
                                price={produce.price_per_unit}
                                rating={produce.rating}
                                id={produce.id}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;

const ProductMoreDetail: React.FC = () => {
    const [activeTab, setActiveTab] = useState<
        "description" | "additional-info" | "reviews"
    >("description");

    const handleSetActiveTab = (
        tabName: "description" | "additional-info" | "reviews",
    ) => {
        if (activeTab !== tabName) {
            setActiveTab(tabName);
        }
    };

    const userReviews = [
        {
            userName: "Kristin Watson",
            rating: 5,
            productReview: "Duis at ullamcorper nulla, eu dictum eros.",
            reviewDate: "2 min ago",
            userProfileImage: "path/to/kristin-watson.jpg",
        },
        {
            userName: "Jane Cooper",
            rating: 4,
            productReview:
                "Keep the soil evenly moist for the healthiest growth. If sun gets too hot, Chinese cabbage tends to 'bolt' or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.",
            reviewDate: "30 Apr, 2023",
            userProfileImage: "path/to/jane-cooper.jpg",
        },
        {
            userName: "Jacob Jones",
            rating: 5,
            productReview:
                "Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.",
            reviewDate: "2 min ago",
            userProfileImage: "path/to/jacob-jones.jpg",
        },
        {
            userName: "Ralph Edwards",
            rating: 5,
            productReview:
                "200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA.",
            reviewDate: "2 min ago",
            userProfileImage: "path/to/ralph-edwards.jpg",
        },
    ];

    return (
        <div className="more-detail-section">
            <div className="title-section">
                <h1
                    className={`hover ${activeTab === "description" ? "active" : ""}`}
                    onClick={() => handleSetActiveTab("description")}
                >
                    Descriptions
                </h1>
                <h1
                    className={`hover ${activeTab === "additional-info" ? "active" : ""}`}
                    onClick={() => handleSetActiveTab("additional-info")}
                >
                    Additional Information
                </h1>
                <h1
                    className={`hover ${activeTab === "reviews" ? "active" : ""}`}
                    onClick={() => handleSetActiveTab("reviews")}
                >
                    Customer Feedback
                </h1>
            </div>
            {activeTab === "description" && (
                <div className="description">
                    <p>
                        Sed commodo aliquam dui ac porta. Fusce ipsum felis,
                        imperdiet at posuere ac, viverra at mauris. Maecenas
                        tincidunt ligula a sem vestibulum pharetra. Maecenas
                        auctor tortor lacus, nec laoreet nisi porttitor vel.
                        Etiam tincidunt metus vel dui interdum sollicitudin.
                        Mauris sem ante, vestibulum nec orci vitae, aliquam
                        mollis lacus. Sed et condimentum arcu, id molestie
                        tellus. Nulla facilisi. Nam scelerisque vitae justo a
                        convallis. Morbi urna ipsum, placerat quis commodo quis,
                        egestas elementum leo. Donec convallis mollis enim.
                        Aliquam id mi quam. Phasellus nec fringilla elit.
                        <br />
                        <br />
                        Nulla mauris tellus, feugiat quis pharetra sed, gravida
                        ac dui. Sed iaculis, metus faucibus elementum tincidunt,
                        turpis mi viverra velit, pellentesque tristique neque mi
                        eget nulla. Proin luctus elementum neque et pharetra.
                        <br />
                        <br />
                        Cras et diam maximus, accumsan sapien et, sollicitudin
                        velit. Nulla blandit eros non turpis lobortis iaculis at
                        ut massa.
                    </p>
                </div>
            )}
            {activeTab === "additional-info" && (
                <div className="additional-info">
                    <table>
                        <tr>
                            <td className="table-label">Weight:</td>
                            <td className="table-info">3kg</td>
                        </tr>
                        <tr>
                            <td className="table-label">Color:</td>
                            <td className="table-info">Green</td>
                        </tr>
                        <tr>
                            <td className="table-label">Type:</td>
                            <td className="table-info">Organic</td>
                        </tr>
                        <tr>
                            <td className="table-label">Category:</td>
                            <td className="table-info">Vegetables</td>
                        </tr>
                        <tr>
                            <td className="table-label">Stock Status:</td>
                            <td className="table-info">Available</td>
                        </tr>
                    </table>
                </div>
            )}
            {activeTab === "reviews" && (
                <div className="product-reviews">
                    <div className="review-list">
                        {userReviews.map((review, index) => (
                            <>
                                <UserReview
                                    productReview={review.productReview}
                                    rating={review.rating}
                                    reviewDate={review.reviewDate}
                                    userName={review.userName}
                                    userProfileImage=""
                                    key={index}
                                />
                                {index !== userReviews.length - 1 && <hr />}
                            </>
                        ))}
                    </div>
                    <div className="load-more">
                        <button>Load More</button>
                    </div>
                </div>
            )}
        </div>
    );
};

interface UserReviewInterface {
    userName: string;
    rating: number;
    productReview: string;
    reviewDate: string;
    userProfileImage: string;
}

const UserReview: React.FC<UserReviewInterface> = ({
    productReview,
    rating,
    reviewDate,
    userName,
    userProfileImage,
}) => {
    return (
        <div className="user-review">
            <div className="top-section">
                <div className="user-detail">
                    <img src="/src/assets/images/image.png" />
                    <div>
                        <h2>{userName}</h2>
                        <StarRating rating={rating} />
                    </div>
                </div>
                <span className="date-time">{reviewDate}</span>
            </div>
            <p>{productReview}</p>
        </div>
    );
};
