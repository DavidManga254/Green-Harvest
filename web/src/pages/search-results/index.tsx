import { Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Produce from "../../api/Produce";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid2,
    IconButton,
    InputLabel,
    MenuItem,
    Pagination,
    PaginationItem,
    Rating,
    Select,
    Tooltip,
    Typography,
} from "@mui/material";
import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
import Cart from "../../api/Cart";
import displayNotification from "../../lib/displayNotification";
import { toast } from "react-toastify";
import { Route } from "../../routes/(user)/product/search-results";
import { useNavigate } from "@tanstack/react-router";
import { useSearch } from "@tanstack/react-router";

interface SearchResultsPageInterface {
    query: string;
    page: number;
    category?: string;
    available?: boolean;
    on_sale?: boolean;
}

const SearchResultsPage: React.FC<SearchResultsPageInterface> = ({
    page,
    query,
    available,
    category,
    on_sale,
}) => {
    const queryClient = useQueryClient();

    const navigate = useNavigate({ from: "/product/search-results" });
    const search = useSearch({ from: "/(user)/product/search-results/" });

    const {
        data: produceList,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["produce-search", query, page, category, available, on_sale],
        queryFn: () =>
            Produce.searchProduce({
                name: query,
                page,
                category,
                available,
                on_sale,
            }),
        placeholderData: (previousData) => previousData,
        enabled: true, // or keep `!!query` if you want to require a keyword
    });

    const cartMutation = useMutation({
        mutationFn: Cart.addToCart,

        onMutate: () => {
            const toastId = displayNotification("Adding to cart...", "loading");
            return { toastId };
        },

        onSuccess: (_data, _variables, context) => {
            if (context?.toastId) {
                toast.update(context.toastId, {
                    render: "Added to cart!",
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                    theme: "colored",
                });
            } else {
                displayNotification("Added to cart!", "success");
            }

            queryClient.refetchQueries({ queryKey: ["cart summary"] });
        },

        onError: (_error, _variables, context) => {
            if (context?.toastId) {
                toast.update(context.toastId, {
                    render: "Failed to add to cart",
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                    theme: "colored",
                });
            } else {
                displayNotification("Failed to add to cart", "error");
            }
        },
    });

    const handleAddtoCart = (productId: number | string) => {
        cartMutation.mutate({
            produceId: productId,
            quantity: 1,
        });
    };

    const handleCategoryChange = (newCategory: string) => {
        navigate({
            to: "/product/search-results",
            search: {
                ...search,
                category: newCategory,
                page: 1, // reset page on filter change
            },
        });
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading search results</p>;

    const results = produceList?.data || [];

    const pagination = produceList?.pagination;

    return (
        <div>
            <h2>Search Results for "{query}"</h2>
            <Box display="flex" gap={2} alignItems="center" mb={3}>
                <FormControl size="small">
                    <InputLabel>Category</InputLabel>
                </FormControl>

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={!!available}
                            onChange={(e) =>
                                navigate({
                                    to: "/product/search-results",
                                    search: {
                                        ...search,
                                        available: e.target.checked,
                                        page: 1,
                                    },
                                })
                            }
                        />
                    }
                    label="In Stock"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={!!on_sale}
                            onChange={(e) =>
                                navigate({
                                    to: "/product/search-results",
                                    search: {
                                        ...search,
                                        on_sale: e.target.checked, // ✅ fixed here
                                        page: 1,
                                    },
                                })
                            }
                        />
                    }
                    label="On Sale"
                />
            </Box>

            {results.length === 0 ? (
                <p>No produce found.</p>
            ) : (
                <Grid2 container spacing={2} justifyContent={"center"}>
                    {results.map((product: any) => (
                        <Grid2
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            display="flex"
                            key={product.id}
                        >
                            <Link
                                to={`/product/$productId`}
                                params={{ productId: product.id }}
                            >
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
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={
                                            product.images?.image_path ??
                                            "/placeholder.png"
                                        }
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
                                            <Typography
                                                variant="body1"
                                                color="primary"
                                            >
                                                Ksh
                                                {Number(
                                                    product.price_per_unit,
                                                ).toFixed(2)}
                                            </Typography>
                                            {product.discount && (
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        textDecoration:
                                                            "line-through",
                                                    }}
                                                >
                                                    $
                                                    {(
                                                        Number(
                                                            product.price_per_unit,
                                                        ) +
                                                        Number(product.discount)
                                                    ).toFixed(2)}
                                                </Typography>
                                            )}
                                        </Box>
                                    </CardContent>
                                    <CardActions
                                        className="actions"
                                        sx={{
                                            position: "absolute",
                                            bottom: 40,
                                            right: 8,
                                            flexDirection: "column",
                                            opacity: 1,
                                        }}
                                    >
                                        <Tooltip title="Add to Cart">
                                            <IconButton
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    handleAddtoCart(product.id);
                                                }}
                                                color="success"
                                            >
                                                <AddShoppingCart />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Add to Wishlist">
                                            <IconButton color="error">
                                                <FavoriteBorder />
                                            </IconButton>
                                        </Tooltip>
                                    </CardActions>
                                </Card>
                            </Link>
                        </Grid2>
                    ))}
                </Grid2>
            )}
            {pagination && pagination.last_page > 1 && (
                <Box mt={4} display="flex" justifyContent="center">
                    <Pagination
                        page={pagination.current_page}
                        count={pagination.last_page}
                        color="primary"
                        sx={{
                            "& .MuiPaginationItem-root": {
                                color: "green", // text color
                                borderColor: "green", // for outlined variant
                            },
                            "& .Mui-selected": {
                                backgroundColor: "green",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "#2e7d32", // darker green
                                },
                            },
                        }}
                        shape="rounded"
                        renderItem={(item) => (
                            <PaginationItem
                                component={Link}
                                to="/product/search-results"
                                search={{
                                    query,
                                    page: item.page,
                                }}
                                {...item}
                            />
                        )}
                    />
                </Box>
            )}
        </div>
    );
};

export default SearchResultsPage;
