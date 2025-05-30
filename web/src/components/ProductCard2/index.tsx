import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Typography,
    IconButton,
    Tooltip,
    Rating,
} from "@mui/material";
import {
    AddShoppingCart,
    ChatBubbleOutline,
    FavoriteBorder,
} from "@mui/icons-material";
import { Link, useRouter } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cart from "../../api/Cart";
import { Skeleton } from "@mui/material";
import Message from "../../api/Message";

export interface Product {
    id: number | string;
    name: string;
    rating: number;
    price_per_unit: number;
    discount?: number;
    images?: {
        image_path: string;
    };
    farmer_id: number;
}

interface ProductCard2Props {
    product: Product;
}

const ProductCard2: React.FC<ProductCard2Props> = ({ product }) => {
    const queryClient = useQueryClient();

    const router = useRouter();

    const { mutate, isPending: isAddingToCart } = useMutation({
        mutationFn: Cart.addToCart,

        onMutate: () => {
            toast.loading("Adding to cart...", {
                toastId: "cart-loading",
                position: "top-right",
                autoClose: false,
                closeOnClick: false,
                draggable: false,
            });
        },

        onSuccess: () => {
            toast.dismiss("cart-loading");
            queryClient.refetchQueries({ queryKey: ["cart summary"] });

            toast.success("Added to cart!", {
                position: "top-right",
                autoClose: 2000,
            });
        },

        onError: () => {
            toast.dismiss("cart-loading");

            toast.error("Failed to add to cart.", {
                position: "top-right",
                autoClose: 3000,
            });
        },
    });

    const handleAddToCart = () => {
        mutate({
            produceId: product.id,
            quantity: 1,
        });
    };

    const { mutate: getChatWithVendor, isPending: checkingChat } = useMutation({
        mutationFn: (vendor_id: number) =>
            Message.getChatWithVendor({ vendor_id }),

        onMutate: () => {
            toast.loading("Checking for chat...", {
                toastId: "check-chat",
                position: "top-right",
                autoClose: false,
                closeOnClick: false,
                draggable: false,
            });
        },

        onSuccess: (data) => {
            toast.dismiss("check-chat");

            const chatId = data.chat_id;
            // Navigate to chat view or handle in UI
            router.navigate({
                to: "/chat/conversation/$id",
                params: { id: chatId },
                search: { product_id: product.id },
            });
        },

        onError: () => {
            toast.dismiss("check-chat");

            toast.error("Could not find or start chat with farmer.", {
                position: "top-right",
                autoClose: 3000,
            });
        },
    });

    const handleAskFarmer = (vendorId: number) => {
        getChatWithVendor(vendorId);
    };

    return (
        <Card
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                "&:hover .actions": { opacity: 1 },
            }}
        >
            <Link
                to="/product/$productId"
                params={{ productId: product.id }}
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <CardMedia
                    component="img"
                    height="180"
                    image={product.images?.image_path ?? "/placeholder.png"}
                    alt={product.name}
                    sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: "3em",
                        }}
                    >
                        {product.name}
                    </Typography>
                    <Rating
                        value={Number(product.rating)}
                        readOnly
                        size="small"
                    />
                    <Box mt={1}>
                        <Typography variant="body1" color="primary">
                            Ksh{Number(product.price_per_unit).toFixed(2)}
                        </Typography>
                        {product.discount && (
                            <Typography
                                variant="body2"
                                sx={{ textDecoration: "line-through" }}
                            >
                                Ksh
                                {(
                                    Number(product.price_per_unit) +
                                    Number(product.discount)
                                ).toFixed(2)}
                            </Typography>
                        )}
                    </Box>
                </CardContent>
            </Link>

            <CardActions
                className="actions"
                sx={{
                    position: "absolute",
                    bottom: 20,
                    right: 8,
                    flexDirection: "column",
                }}
            >
                <Tooltip title="Add to Cart">
                    <IconButton
                        onClick={handleAddToCart}
                        color="success"
                        disabled={isAddingToCart}
                    >
                        <AddShoppingCart />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Ask about this product">
                    <IconButton
                        onClick={() => handleAskFarmer(product.farmer_id)}
                    >
                        <ChatBubbleOutline />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
};

export default ProductCard2;

export const ProductCard2Skeleton = () => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
            }}
        >
            <Skeleton
                variant="rectangular"
                height={180}
                sx={{ width: "100%", objectFit: "cover" }}
            />

            <CardContent>
                <Skeleton width="100%" height={24} sx={{ mb: 1 }} />
                <Skeleton width="60%" height={20} />
                <Box mt={2}>
                    <Skeleton width="40%" height={28} />
                    <Skeleton width="30%" height={20} />
                </Box>
            </CardContent>

            <CardActions
                sx={{
                    justifyContent: "flex-end",
                    px: 2,
                    pb: 1,
                }}
            >
                <IconButton disabled>
                    <AddShoppingCart />
                </IconButton>
                <IconButton disabled>
                    <FavoriteBorder />
                </IconButton>
            </CardActions>
        </Card>
    );
};
