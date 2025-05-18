import {
    Container,
    Grid,
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    Divider,
    Avatar,
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Chip,
    DialogActions,
    Skeleton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import User from "../../../../api/User";
import { subscribe } from "diagnostics_channel";
import Payment from "../../../../api/Payment";
import { toast } from "react-toastify";

const plan = {
    id: 12,
    template: {
        name: "Balanced Farm Box",
        frequency: "monthly",
        base_price: 980,
        plan_type: "standard",
    },
    description:
        "A curated monthly selection of seasonal produce: spinach, apples, salmon and more. Designed for balance and freshness.",
    cover_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD32z0RdOYf7Btj4FDI9cO2XwLQCs-AaYoymRYFksE9r2n1JS1JmdcepQH25kweiL2_7I&usqp=CAU",
    included_produce: [
        {
            id: 1,
            name: "Spinach",
            image: "https://static01.nyt.com/images/2023/11/28/multimedia/PF-Sauteed-Spinach-zvkm/PF-Sauteed-Spinach-zvkm-mediumSquareAt3X.jpg",
            quantity: "500g",
        },
        {
            id: 2,
            name: "Apple",
            image: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg",
            quantity: "1kg",
        },
        {
            id: 3,
            name: "Salmon",
            image: "https://static01.nyt.com/images/2024/08/01/multimedia/as-grilled-salmon-bvfk/as-grilled-salmon-bvfk-threeByTwoMediumAt2X.jpg?quality=75&auto=webp",
            quantity: "2 fillets",
        },
    ],
    farmer: {
        name: "Dr. Eliza Murazik MD",
        profile_image: null,
        location: "Nakuru, Kenya",
        bio: "With over 15 years of sustainable farming, Dr. Eliza ensures only the best reaches your table.",
    },
    reviews: [
        {
            id: 1,
            name: "Jane K.",
            rating: 5,
            comment:
                "Super fresh and reliable delivery every time. I love the variety!",
            date: "April 2025",
        },
        {
            id: 2,
            name: "Brian O.",
            rating: 4,
            comment:
                "Great produce, though the kale was a little wilted once. Still subscribed!",
            date: "March 2025",
        },
        {
            id: 3,
            name: "Anonymous",
            rating: 5,
            comment: "This subscription box changed the way I plan my meals!",
            date: "February 2025",
        },
        {
            id: 4,
            name: "Faith L.",
            rating: 4,
            comment:
                "The seafood was excellent. Would love more spinach though!",
            date: "February 2025",
        },
        {
            id: 5,
            name: "Tony W.",
            rating: 3,
            comment: "Delivery was delayed once. Otherwise, solid value.",
            date: "January 2025",
        },
        {
            id: 6,
            name: "Miriam G.",
            rating: 5,
            comment: "My kids actually eat more veggies now. 10/10.",
            date: "January 2025",
        },
        {
            id: 7,
            name: "Joseph N.",
            rating: 4,
            comment: "I like the flexibility and that it supports local farms.",
            date: "December 2024",
        },
        {
            id: 8,
            name: "Lena P.",
            rating: 5,
            comment: "Freshest apples I’ve ever had. Worth every shilling.",
            date: "November 2024",
        },
        {
            id: 9,
            name: "Duncan R.",
            rating: 4,
            comment:
                "Clean packaging, great selection — and they let me skip a week!",
            date: "November 2024",
        },
        {
            id: 10,
            name: "Grace T.",
            rating: 5,
            comment:
                "Perfect for meal planning and healthy eating. Recommended it to friends.",
            date: "October 2024",
        },
    ],
};

interface SubscriptionDetailPageInterface {
    subscriptionId: number | string;
}

const SubscriptionDetailPage: React.FC<SubscriptionDetailPageInterface> = ({
    subscriptionId,
}) => {
    const [startDate, setStartDate] = useState("");
    const [showAllReviews, setShowAllReviews] = useState(false);

    const {
        data: subscriptionPlan,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["subscription-plan", subscriptionId],
        queryFn: () => User.getSubscriptionPlanDetail(subscriptionId),
        enabled: !!subscriptionId,
        staleTime: 1000 * 60 * 10,
    });

    const { mutate: createSubscription, isPending: isSubscribing } =
        useMutation({
            mutationFn: (payload: {
                farmer_plan_id: number;
                start_date: string;
            }) => Payment.subscribeToPlan(payload),

            onMutate: () => {
                toast("Processing subscription…", {
                    toastId: "processing-subscription",
                    position: "top-right",
                    isLoading: true,
                    closeOnClick: false,
                    closeButton: false,
                    autoClose: false,
                    style: {
                        borderLeft: "6px solid #00C853",
                        backgroundColor: "#e8f5e9",
                        color: "#1b5e20",
                    },
                });
            },

            onSuccess: (data) => {
                toast.dismiss("processing-subscription");

                if (data) {
                    toast.success("Redirecting to Paystack...", {
                        position: "top-right",
                        autoClose: 3000,
                    });

                    window.location.href = data;
                } else {
                    toast.error("Failed to get authorization URL.", {
                        position: "top-right",
                        autoClose: 5000,
                    });
                }
            },

            onError: () => {
                toast.dismiss("processing-subscription");
                toast.error("Subscription failed. Please try again.", {
                    position: "top-right",
                    autoClose: 5000,
                });
            },
        });

    const subscribe = () => {
        const selected = new Date(startDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // normalize

        if (!startDate || selected <= today) {
            alert("Please select a valid start date after today.");
            return;
        }

        createSubscription({
            farmer_plan_id: Number(subscriptionId),
            start_date: startDate,
        });
    };

    const queryClient = useQueryClient();

    const { mutate: cancelSubscription } = useMutation({
        mutationFn: (subscriptionId: number) =>
            User.cancelSubscription(subscriptionId),

        onMutate: () => {
            toast("Cancelling your subscription…", {
                toastId: "cancel-subscription",
                position: "top-right",
                isLoading: true,
                closeOnClick: false,
                closeButton: false,
                autoClose: false,
                style: {
                    borderLeft: "6px solid #f44336",
                    backgroundColor: "#ffebee",
                    color: "#b71c1c",
                },
            });
        },

        onSuccess: () => {
            toast.dismiss("cancel-subscription");
            toast.success("Subscription cancelled successfully.", {
                position: "top-right",
                autoClose: 4000,
            });

            // Refresh subscription list
            queryClient.invalidateQueries({ queryKey: ["user-subscriptions"] });
        },

        onError: () => {
            toast.dismiss("cancel-subscription");
            toast.error("Failed to cancel subscription. Please try again.", {
                position: "top-right",
                autoClose: 5000,
            });
        },
    });

    const handleCancelSubscription = (subscriptionId: number) => {
        cancelSubscription(subscriptionId);
    };

    if (isLoading) {
        return (
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Grid container spacing={6}>
                    {/* Left Panel Skeleton */}
                    <Grid item xs={12} md={7}>
                        <Card elevation={3}>
                            <Skeleton variant="rectangular" height={240} />
                            <CardContent>
                                <Skeleton
                                    variant="rectangular"
                                    width={100}
                                    height={28}
                                    sx={{ mb: 2 }}
                                />
                                <Skeleton
                                    variant="text"
                                    height={32}
                                    width="60%"
                                />
                                <Skeleton variant="text" width="90%" />
                                <Skeleton variant="text" width="85%" />
                                <Box mt={2} mb={2}>
                                    <Skeleton width={140} height={20} />
                                </Box>

                                <Divider sx={{ my: 2 }} />

                                {/* Farmer Profile */}
                                <Box display="flex" alignItems="center" mb={2}>
                                    <Skeleton
                                        variant="circular"
                                        width={40}
                                        height={40}
                                        sx={{ mr: 2 }}
                                    />
                                    <Box>
                                        <Skeleton width={100} height={20} />
                                        <Skeleton width={80} height={16} />
                                    </Box>
                                </Box>
                                <Skeleton width="100%" height={50} />

                                <Skeleton
                                    width={160}
                                    height={28}
                                    sx={{ mt: 3 }}
                                />
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {[...Array(3)].map((_, i) => (
                                        <Grid item xs={12} sm={6} key={i}>
                                            <Box display="flex" gap={2}>
                                                <Skeleton
                                                    variant="rectangular"
                                                    width={64}
                                                    height={64}
                                                />
                                                <Box flex={1}>
                                                    <Skeleton height={20} />
                                                    <Skeleton height={16} />
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>

                                {/* Why choose this box */}
                                <Box mt={3}>
                                    <Skeleton width={180} height={24} />
                                    {[...Array(3)].map((_, i) => (
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            key={i}
                                            mt={1}
                                        >
                                            <Skeleton
                                                variant="circular"
                                                width={24}
                                                height={24}
                                                sx={{ mr: 1 }}
                                            />
                                            <Skeleton width="60%" height={16} />
                                        </Box>
                                    ))}
                                </Box>

                                {/* Review previews */}
                                <Box mt={4}>
                                    <Skeleton width={180} height={24} />
                                    {[...Array(2)].map((_, i) => (
                                        <Box key={i} sx={{ mt: 2 }}>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                gap={1}
                                                mb={1}
                                            >
                                                <Skeleton
                                                    variant="circular"
                                                    width={32}
                                                    height={32}
                                                />
                                                <Box>
                                                    <Skeleton width={100} />
                                                    <Skeleton width={80} />
                                                </Box>
                                            </Box>
                                            <Skeleton width="50%" />
                                            <Skeleton
                                                width="100%"
                                                height={40}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Right Panel Skeleton (Checkout) */}
                    <Grid item xs={12} md={5}>
                        <Card
                            elevation={3}
                            sx={{ p: 3, position: "sticky", top: 100 }}
                        >
                            <Skeleton width="60%" height={28} sx={{ mb: 2 }} />
                            <Skeleton
                                variant="rectangular"
                                height={56}
                                sx={{ mb: 3 }}
                            />
                            <Skeleton width="40%" height={20} />
                            <Skeleton width="50%" height={20} />
                            <Skeleton width="60%" height={32} sx={{ mt: 2 }} />
                            <Skeleton
                                variant="rectangular"
                                height={48}
                                sx={{ mt: 3, borderRadius: 2 }}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }

    if (error || !subscriptionPlan)
        return (
            <Typography align="center" color="error">
                Failed to load subscription plan.
            </Typography>
        );

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Grid container spacing={6}>
                {/* Left: Subscription Plan Info */}
                <Grid item xs={12} md={7}>
                    <Card elevation={3}>
                        {subscriptionPlan.plan.cover_image && (
                            <CardMedia
                                component="img"
                                height="240"
                                image={subscriptionPlan.plan.cover_image}
                                sx={{ objectFit: "cover" }}
                            />
                        )}
                        <CardContent>
                            <Chip
                                label="Best Seller"
                                color="success"
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />
                            <Typography variant="h5" gutterBottom>
                                {subscriptionPlan.plan.template.name}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                mb={1}
                            >
                                {subscriptionPlan.plan.description}
                            </Typography>

                            <Box
                                display="flex"
                                alignItems="center"
                                gap={1}
                                mb={2}
                            >
                                <StarIcon fontSize="small" color="warning" />
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    4.8 (48 reviews)
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 2 }} />

                            <Box display="flex" alignItems="center" mb={2}>
                                <Avatar
                                    src={plan.farmer.profile_image || ""}
                                    alt={plan.farmer.name}
                                    sx={{ mr: 2, bgcolor: "#388e3c" }}
                                >
                                    {plan.farmer.name.charAt(0)}
                                </Avatar>
                                <Box>
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                    >
                                        {plan.farmer.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {plan.farmer.location}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                mb={2}
                            >
                                {subscriptionPlan.plan.farmer.bio}
                            </Typography>

                            <Typography variant="subtitle1" gutterBottom>
                                Included Produce:
                            </Typography>

                            <Grid container spacing={2}>
                                {subscriptionPlan.plan.included_produce.map(
                                    (item) => (
                                        <Grid item xs={12} sm={6} key={item.id}>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                gap={2}
                                            >
                                                <Box
                                                    component="img"
                                                    src={item.image}
                                                    alt={item.name}
                                                    sx={{
                                                        width: 64,
                                                        height: 64,
                                                        objectFit: "cover",
                                                        borderRadius: 1,
                                                        border: "1px solid #ccc",
                                                    }}
                                                />
                                                <Box>
                                                    <Typography
                                                        variant="body1"
                                                        fontWeight="medium"
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        Qty: {item.quantity}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ),
                                )}
                            </Grid>

                            <Box mt={3}>
                                <Typography variant="subtitle2" mb={1}>
                                    Why choose this box?
                                </Typography>
                                <Box display="flex" alignItems="center" mb={1}>
                                    <CheckCircleIcon
                                        color="success"
                                        fontSize="small"
                                        sx={{ mr: 1 }}
                                    />
                                    <Typography variant="body2">
                                        Locally sourced organic produce
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" mb={1}>
                                    <CheckCircleIcon
                                        color="success"
                                        fontSize="small"
                                        sx={{ mr: 1 }}
                                    />
                                    <Typography variant="body2">
                                        Balanced nutrition mix monthly
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <CheckCircleIcon
                                        color="success"
                                        fontSize="small"
                                        sx={{ mr: 1 }}
                                    />
                                    <Typography variant="body2">
                                        Supports eco-conscious farming
                                    </Typography>
                                </Box>
                            </Box>
                            {plan.reviews?.length > 0 && (
                                <Box mt={4}>
                                    {plan.reviews?.length > 0 && (
                                        <Box mt={4}>
                                            <Typography
                                                variant="h6"
                                                gutterBottom
                                            >
                                                Customer Reviews
                                            </Typography>

                                            {subscriptionPlan.plan.reviews
                                                ?.slice(0, 2)
                                                .map((review) => (
                                                    <Box
                                                        key={review.id}
                                                        sx={{ mb: 3 }}
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
                                                                    width: 32,
                                                                    height: 32,
                                                                }}
                                                            >
                                                                {review.name.charAt(
                                                                    0,
                                                                )}
                                                            </Avatar>
                                                            <Box>
                                                                <Typography variant="subtitle2">
                                                                    {
                                                                        review.name
                                                                    }
                                                                </Typography>
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.secondary"
                                                                >
                                                                    {
                                                                        review.date
                                                                    }
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                        <Box
                                                            display="flex"
                                                            alignItems="center"
                                                            mt={1}
                                                            mb={0.5}
                                                        >
                                                            {Array.from({
                                                                length: 5,
                                                            }).map((_, i) => (
                                                                <StarIcon
                                                                    key={i}
                                                                    fontSize="small"
                                                                    color={
                                                                        i <
                                                                        review.rating
                                                                            ? "warning"
                                                                            : "disabled"
                                                                    }
                                                                />
                                                            ))}
                                                        </Box>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                        >
                                                            {review.comment}
                                                        </Typography>
                                                    </Box>
                                                ))}

                                            {subscriptionPlan.plan.reviews
                                                .length > 2 && (
                                                <Button
                                                    onClick={() =>
                                                        setShowAllReviews(true)
                                                    }
                                                    size="small"
                                                >
                                                    View All Reviews
                                                </Button>
                                            )}

                                            <ReviewModal
                                                open={showAllReviews}
                                                onClose={() =>
                                                    setShowAllReviews(false)
                                                }
                                                reviews={
                                                    subscriptionPlan.plan
                                                        .reviews
                                                }
                                            />
                                        </Box>
                                    )}
                                </Box>
                            )}
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right: Checkout Form */}
                <Grid item xs={12} md={5}>
                    {subscriptionPlan.user_subscription.is_subscribed ===
                    false ? (
                        <Card
                            elevation={3}
                            sx={{
                                p: 3,
                                position: "sticky",
                                top: 100,
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Subscription Checkout
                            </Typography>

                            <TextField
                                fullWidth
                                label="Start Date"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                inputProps={{
                                    min: new Date().toISOString().split("T")[0], // today's date in YYYY-MM-DD
                                }}
                                sx={{ mb: 3, mt: 1 }}
                            />

                            <Divider sx={{ mb: 2 }} />

                            <Box mb={2}>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                >
                                    Price Breakdown
                                </Typography>
                                <Typography variant="body2">
                                    Base Price: Ksh{" "}
                                    {subscriptionPlan.plan.template.base_price}
                                </Typography>
                                <Typography variant="body2">
                                    Delivery Fee: Free
                                </Typography>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    mt={1}
                                >
                                    Total: Ksh{" "}
                                    {subscriptionPlan.plan.template.base_price.toLocaleString()}{" "}
                                    / {subscriptionPlan.plan.template.frequency}
                                </Typography>
                            </Box>

                            <Button
                                variant="contained"
                                fullWidth
                                size="large"
                                disabled={!startDate || isSubscribing}
                                sx={{
                                    backgroundColor: "#388e3c",
                                    "&:hover": { backgroundColor: "#2e7d32" },
                                }}
                                onClick={subscribe}
                            >
                                {isSubscribing
                                    ? "Processing..."
                                    : "Confirm Subscription"}
                            </Button>
                        </Card>
                    ) : (
                        <Card
                            elevation={3}
                            sx={{
                                p: 3,
                                position: "sticky",
                                top: 100,
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                You are already subscribed to this plan.
                            </Typography>

                            <Button
                                variant="outlined"
                                color="error"
                                size="large"
                                sx={{ mt: 2 }}
                                onClick={() => {
                                    handleCancelSubscription(
                                        subscriptionPlan.user_subscription
                                            .subscription_plan_id,
                                    );
                                }}
                            >
                                Cancel Subscription
                            </Button>
                        </Card>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default SubscriptionDetailPage;

// Inside component:
const ReviewModal = ({ open, onClose, reviews }: any) => {
    const [page, setPage] = useState(1);
    const pageSize = 5;

    const totalPages = Math.ceil(reviews.length / pageSize);
    const pagedReviews = reviews.slice((page - 1) * pageSize, page * pageSize);

    const handleNext = () => page < totalPages && setPage(page + 1);
    const handlePrev = () => page > 1 && setPage(page - 1);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>
                All Reviews ({reviews.length})
                <IconButton
                    onClick={onClose}
                    sx={{ position: "absolute", right: 16, top: 16 }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers sx={{ maxHeight: 500 }}>
                <List>
                    {pagedReviews.map((review: any) => (
                        <ListItem
                            key={review.id}
                            alignItems="flex-start"
                            sx={{ mb: 2 }}
                        >
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: "#8bc34a" }}>
                                    {review.name.charAt(0)}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        gap={1}
                                    >
                                        <Typography variant="subtitle2">
                                            {review.name}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            {review.date}
                                        </Typography>
                                    </Box>
                                }
                                secondary={
                                    <>
                                        <Box display="flex" mb={0.5}>
                                            {Array.from({ length: 5 }).map(
                                                (_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        fontSize="small"
                                                        color={
                                                            i < review.rating
                                                                ? "warning"
                                                                : "disabled"
                                                        }
                                                    />
                                                ),
                                            )}
                                        </Box>
                                        <Typography variant="body2">
                                            {review.comment}
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </DialogContent>

            <DialogActions
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    px: 3,
                    py: 2,
                }}
            >
                <Button
                    onClick={handlePrev}
                    disabled={page === 1}
                    size="small"
                    variant="outlined"
                >
                    Previous
                </Button>

                <Typography variant="body2">
                    Page {page} of {totalPages}
                </Typography>

                <Button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    size="small"
                    variant="outlined"
                >
                    Next
                </Button>
            </DialogActions>
        </Dialog>
    );
};
