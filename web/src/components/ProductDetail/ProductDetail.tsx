import {
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Instagram from "../../assets/icons/instagram";
import Twitter from "../../assets/icons/twitter";
import ImagePreview from "../ImagePreview/ImagePreview";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cart from "../../api/Cart";

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
    farmer?: {
        name: string;
        profile_image?: string;
        location?: string;
    };
    productId: number | string;
}

const ProductDetailHeader: React.FC<ProductDetailHeaderinterface> = ({
    name,
    rating,
    price_per_unit,
    is_on_sale,
    description,
    category,
    images,
    farmer,
    productId,
}) => {
    const productImages = images.map((image) => image.image_path);
    const [count, setCount] = useState(1);

    const queryClient = useQueryClient();

    const cartMutation = useMutation({
        mutationFn: Cart.addToCart,
        onMutate: () => {
            // Show loading toast and save its ID
            const toastId = toast.loading("Adding to cart...", {
                position: "top-right",
                closeOnClick: false,
                closeButton: false,
            });

            // Return context for later use in onSuccess/onError
            return { toastId };
        },

        onSuccess: (_data, _variables, context) => {
            if (context?.toastId) toast.dismiss(context.toastId);

            queryClient.refetchQueries({ queryKey: ["cart summary"] });
            toast.success("Added to cart", {
                position: "top-right",
                autoClose: 3000,
            });
            setCount(1);
        },

        onError: (_error, _variables, context) => {
            if (context?.toastId) toast.dismiss(context.toastId);

            toast.error("Failed to add to cart", {
                position: "top-right",
                autoClose: 4000,
            });
        },
    });

    const handleAddToCart = () => {
        cartMutation.mutate({
            produceId: productId,
            quantity: count,
        });
    };

    return (
        <Box p={4} borderRadius={2}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <ImagePreview imagesUrl={productImages} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        {name}
                    </Typography>

                    <Box display="flex" alignItems="center" gap={1} mb={2}>
                        {[...Array(5)].map((_, i) => (
                            <StarIcon
                                key={i}
                                fontSize="small"
                                color={i < rating ? "warning" : "disabled"}
                            />
                        ))}
                        <Typography variant="body2">({rating})</Typography>
                    </Box>

                    {farmer && (
                        <Box display="flex" alignItems="center" gap={2} mb={2}>
                            <Avatar
                                src={farmer.profile_image}
                                alt={farmer.name}
                                sx={{
                                    width: 48,
                                    height: 48,
                                    bgcolor: "#8bc34a",
                                }}
                            >
                                {farmer.name.charAt(0)}
                            </Avatar>
                            <Box>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bold"
                                >
                                    {farmer.name}
                                </Typography>
                                {farmer.location && (
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {farmer.location}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    )}

                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Typography
                            variant="h5"
                            color="text.primary"
                            fontWeight="bold"
                        >
                            Ksh {price_per_unit}
                        </Typography>
                        {is_on_sale && <Chip label="On Sale" color="success" />}
                    </Box>

                    <Typography variant="body1" color="text.secondary" mb={3}>
                        {description}
                    </Typography>

                    <Box display="flex" gap={2} alignItems="center" mb={2}>
                        <Typography variant="subtitle2">Share:</Typography>
                        <IconButton size="small">
                            <Twitter height="18" width="18" />
                        </IconButton>
                        <IconButton size="small">
                            <Instagram height="18" width="18" />
                        </IconButton>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Box display="flex" gap={2} alignItems="center" mb={3}>
                        <IconButton
                            onClick={() => setCount(Math.max(1, count - 1))}
                        >
                            <RemoveIcon />
                        </IconButton>
                        <Typography>{count}</Typography>
                        <IconButton onClick={() => setCount(count + 1)}>
                            <AddIcon />
                        </IconButton>

                        <Button
                            variant="contained"
                            startIcon={<AddShoppingCartIcon />}
                            sx={{
                                bgcolor: "#388e3c",
                                "&:hover": { bgcolor: "#2e7d32" },
                            }}
                            onClick={handleAddToCart}
                            disabled={cartMutation.isPending}
                        >
                            {cartMutation.isPending
                                ? "Adding..."
                                : "Add to Cart"}
                        </Button>

                        <IconButton color="success">
                            <FavoriteBorderIcon />
                        </IconButton>
                    </Box>

                    <Box mt={2}>
                        <Typography variant="subtitle2" color="text.secondary">
                            Category:
                        </Typography>
                        <Typography variant="body2">{category.name}</Typography>
                    </Box>

                    <Box mt={1}>
                        <Typography variant="subtitle2" color="text.secondary">
                            Tags:
                        </Typography>
                        <Box display="flex" gap={1} flexWrap="wrap">
                            {[
                                "Vegetables",
                                "Healthy",
                                "Cabbage",
                                "Organic",
                            ].map((tag, i) => (
                                <Chip
                                    key={i}
                                    label={tag}
                                    variant="outlined"
                                    color="success"
                                    size="small"
                                />
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductDetailHeader;
