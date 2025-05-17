import "./ProductDetail.css";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import Produce from "../../api/Produce";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { useState } from "react";
import Productcard from "../../components/ProductCard/ProductCard";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    List,
    ListItem,
    Pagination,
    Tab,
    Tabs,
    Typography,
    Avatar,
    Card,
    CardContent,
    CircularProgress,
    ListItemIcon,
    ListItemText,
    useTheme,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

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
                    farmer={productData.farmer}
                    productId={productId}
                />
                <ProductMoreDetail
                    productId={productId}
                    description={productData.markdown_description}
                />
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

interface ProductMoreDetailProps {
    productId: number | string;
}

interface ProductMoreDetailProps {
    productId: number | string;
    description?: string;
}

const ProductMoreDetail: React.FC<ProductMoreDetailProps> = ({
    productId,
    description,
}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [page, setPage] = useState(1);
    const perPage = 3;

    // Reviews for the in-page tab
    const {
        data: userReviews,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["product-reviews", productId, 1],
        queryFn: () => Produce.getProductReviews(productId, 1, perPage),
        staleTime: 1000 * 60 * 5,
    });

    const reviewList = userReviews?.data || [];
    const reviewCount = userReviews?.total || 0;

    // Reviews for modal
    const {
        data: modalReviews,
        isLoading: isModalLoading,
        isError: isModalError,
    } = useQuery({
        queryKey: ["product-reviews-modal", productId, page],
        queryFn: () => Produce.getProductReviews(productId, page, perPage),
        enabled: showReviewModal,
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
    });

    const tabLabels = [
        "Description",
        "Additional Info",
        `Customer Feedback (${reviewCount || 0})`,
    ];

    return (
        <Box sx={{ p: 3, borderRadius: 2 }}>
            <Tabs
                value={activeTab}
                onChange={(_, newValue) => setActiveTab(newValue)}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                sx={{ mb: 3, borderRadius: 1 }}
            >
                {tabLabels.map((label, index) => (
                    <Tab label={label} key={index} />
                ))}
            </Tabs>

            {/* DESCRIPTION TAB */}
            {activeTab === 0 && (
                <MarkdownDescription
                    content={description || "No description yet."}
                />
            )}

            {/* ADDITIONAL INFO TAB */}
            {activeTab === 1 && (
                <Grid container spacing={2}>
                    {[
                        "Weight: 3kg",
                        "Color: Green",
                        "Type: Organic",
                        "Category: Vegetables",
                        "Stock: Available",
                    ].map((info, i) => (
                        <Grid item xs={6} key={i}>
                            <Typography variant="body2" color="text.secondary">
                                {info}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* CUSTOMER FEEDBACK TAB */}
            {activeTab === 2 && (
                <Box>
                    {isLoading ? (
                        <Box display="flex" justifyContent="center" py={3}>
                            <CircularProgress size={28} />
                        </Box>
                    ) : isError ? (
                        <Typography align="center" color="error">
                            Failed to load reviews.
                        </Typography>
                    ) : reviewCount === 0 ? (
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            py={5}
                            textAlign="center"
                            sx={{ color: "text.secondary" }}
                        >
                            <Typography variant="h6" gutterBottom>
                                No reviews yet
                            </Typography>
                            <Typography variant="body2">
                                Be the first to share your thoughts about this
                                product.
                            </Typography>
                        </Box>
                    ) : (
                        <>
                            <Grid container spacing={2}>
                                {reviewList.map((review: any) => (
                                    <Grid item xs={12} key={review.id}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Box
                                                    display="flex"
                                                    justifyContent="space-between"
                                                >
                                                    <Box
                                                        display="flex"
                                                        gap={2}
                                                        alignItems="center"
                                                    >
                                                        <Avatar
                                                            sx={{
                                                                bgcolor:
                                                                    "#7cb342",
                                                            }}
                                                        >
                                                            {review.initial}
                                                        </Avatar>
                                                        <Box>
                                                            <Typography variant="subtitle1">
                                                                {
                                                                    review.user_name
                                                                }
                                                            </Typography>
                                                            <Box display="flex">
                                                                {[
                                                                    ...Array(5),
                                                                ].map(
                                                                    (
                                                                        _,
                                                                        idx,
                                                                    ) => (
                                                                        <StarIcon
                                                                            key={
                                                                                idx
                                                                            }
                                                                            fontSize="small"
                                                                            color={
                                                                                idx <
                                                                                review.rating
                                                                                    ? "warning"
                                                                                    : "disabled"
                                                                            }
                                                                        />
                                                                    ),
                                                                )}
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Typography
                                                        variant="caption"
                                                        color="text.secondary"
                                                    >
                                                        {review.posted_at}
                                                    </Typography>
                                                </Box>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ mt: 2 }}
                                                >
                                                    {review.comment}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>

                            {reviewCount > perPage && (
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    mt={3}
                                >
                                    <Button
                                        variant="outlined"
                                        color="success"
                                        onClick={() => setShowReviewModal(true)}
                                    >
                                        View More Reviews
                                    </Button>
                                </Box>
                            )}
                        </>
                    )}
                </Box>
            )}

            {/* MODAL DIALOG FOR FULL PAGINATED REVIEWS */}
            <Dialog
                open={showReviewModal}
                onClose={() => setShowReviewModal(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>User Reviews</DialogTitle>
                <DialogContent dividers>
                    {isModalLoading ? (
                        <Box display="flex" justifyContent="center" py={3}>
                            <CircularProgress size={28} />
                        </Box>
                    ) : isModalError ? (
                        <Typography align="center" color="error" py={3}>
                            Failed to load reviews.
                        </Typography>
                    ) : (
                        <>
                            <List>
                                {(modalReviews?.data || []).map(
                                    (review: any, i: number) => (
                                        <ListItem
                                            key={review.id}
                                            disablePadding
                                            sx={{ mb: 2 }}
                                        >
                                            <Box width="100%">
                                                <Box
                                                    display="flex"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                >
                                                    <Box
                                                        display="flex"
                                                        alignItems="center"
                                                        gap={1}
                                                    >
                                                        <Avatar
                                                            sx={{
                                                                bgcolor:
                                                                    "#8bc34a",
                                                            }}
                                                        >
                                                            {review.initial}
                                                        </Avatar>
                                                        <Typography variant="subtitle2">
                                                            {review.user_name}
                                                        </Typography>
                                                    </Box>
                                                    <Typography
                                                        variant="caption"
                                                        color="text.secondary"
                                                    >
                                                        {review.posted_at}
                                                    </Typography>
                                                </Box>
                                                <Box display="flex" mt={1}>
                                                    {[...Array(5)].map(
                                                        (_, idx) => (
                                                            <StarIcon
                                                                key={idx}
                                                                fontSize="small"
                                                                color={
                                                                    idx <
                                                                    review.rating
                                                                        ? "warning"
                                                                        : "disabled"
                                                                }
                                                            />
                                                        ),
                                                    )}
                                                </Box>
                                                <Typography
                                                    variant="body2"
                                                    mt={1}
                                                >
                                                    {review.comment}
                                                </Typography>
                                                {i <
                                                    modalReviews.data.length -
                                                        1 && (
                                                    <Divider sx={{ mt: 2 }} />
                                                )}
                                            </Box>
                                        </ListItem>
                                    ),
                                )}
                            </List>

                            <Box display="flex" justifyContent="center" mt={2}>
                                <Pagination
                                    count={modalReviews?.last_page || 1}
                                    page={page}
                                    onChange={(_, val) => setPage(val)}
                                    color="success"
                                />
                            </Box>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
};

const MarkdownDescription = ({ content }: { content: string }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                borderRadius: 2,
                padding: 3,
                lineHeight: 1.8,
                fontSize: "1rem",
            }}
        >
            <ReactMarkdown
                rehypePlugins={[rehypeSanitize]}
                components={{
                    h1: ({ node, ...props }) => (
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            color="success.dark"
                            gutterBottom
                            {...props}
                        />
                    ),
                    h2: ({ node, ...props }) => (
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            color="success.main"
                            sx={{ mt: 3, mb: 1 }}
                            {...props}
                        />
                    ),
                    h3: ({ node, ...props }) => (
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            sx={{ mt: 2, mb: 1 }}
                            {...props}
                        />
                    ),
                    p: ({ node, ...props }) => (
                        <Typography variant="body2" sx={{ mb: 2 }} {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                        <List dense sx={{ pl: 2, mb: 2 }} {...props} />
                    ),
                    li: ({ children }) => (
                        <ListItem
                            disableGutters
                            sx={{ alignItems: "flex-start" }}
                        >
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <CheckCircleIcon
                                    color="success"
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="body2">
                                        {children}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ),
                    blockquote: ({ node, ...props }) => (
                        <Box
                            sx={{
                                borderLeft: `4px solid ${theme.palette.success.light}`,
                                backgroundColor: "#e8f5e9",
                                px: 2,
                                py: 1,
                                my: 2,
                                fontStyle: "italic",
                            }}
                            {...props}
                        />
                    ),
                    img: ({ src, alt }) => (
                        <Box
                            component="img"
                            src={src}
                            alt={alt}
                            sx={{
                                width: "100%",
                                maxHeight: 400,
                                objectFit: "cover",
                                borderRadius: 2,
                                my: 2,
                            }}
                        />
                    ),
                    hr: () => <Divider sx={{ my: 3 }} />,
                }}
            >
                {content}
            </ReactMarkdown>
        </Box>
    );
};
