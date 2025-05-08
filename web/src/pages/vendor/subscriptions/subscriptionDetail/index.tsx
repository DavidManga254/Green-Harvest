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

const SubscriptionDetailPage = () => {
    const [startDate, setStartDate] = useState("");
    const [paymentMode, setPaymentMode] = useState("recurring");
    const [showAllReviews, setShowAllReviews] = useState(false);

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Grid container spacing={6}>
                {/* Left: Subscription Plan Info */}
                <Grid item xs={12} md={7}>
                    <Card elevation={3}>
                        {plan.cover_image && (
                            <CardMedia
                                component="img"
                                height="240"
                                image={plan.cover_image}
                                alt={plan.template.name}
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
                                {plan.template.name}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                mb={1}
                            >
                                {plan.description}
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
                                {plan.farmer.bio}
                            </Typography>

                            <Typography variant="subtitle1" gutterBottom>
                                Included Produce:
                            </Typography>

                            <Grid container spacing={2}>
                                {plan.included_produce.map((item) => (
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
                                ))}
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

                                            {plan.reviews
                                                .slice(0, 2)
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

                                            {plan.reviews.length > 2 && (
                                                <Box mt={2}>
                                                    <Button
                                                        onClick={() =>
                                                            setShowAllReviews(
                                                                true,
                                                            )
                                                        }
                                                        size="small"
                                                    >
                                                        View All Reviews
                                                    </Button>
                                                </Box>
                                            )}

                                            <ReviewModal
                                                open={showAllReviews}
                                                onClose={() =>
                                                    setShowAllReviews(false)
                                                }
                                                reviews={plan.reviews}
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
                            sx={{ mb: 3, mt: 1 }}
                        />

                        <Typography variant="subtitle2" gutterBottom>
                            Payment Mode
                        </Typography>
                        <RadioGroup
                            value={paymentMode}
                            onChange={(e) => setPaymentMode(e.target.value)}
                            sx={{ mb: 3 }}
                        >
                            <FormControlLabel
                                value="recurring"
                                control={<Radio color="success" />}
                                label="Recurring (auto-renew every month)"
                            />
                            <FormControlLabel
                                value="seasonal"
                                control={<Radio color="success" />}
                                label="One-time seasonal payment"
                            />
                        </RadioGroup>

                        <Divider sx={{ mb: 2 }} />

                        <Box mb={2}>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary"
                            >
                                Price Breakdown
                            </Typography>
                            <Typography variant="body2">
                                Base Price: Ksh {plan.template.base_price}
                            </Typography>
                            <Typography variant="body2">
                                Delivery Fee: Free
                            </Typography>
                            <Typography variant="h6" fontWeight="bold" mt={1}>
                                Total: Ksh{" "}
                                {plan.template.base_price.toLocaleString()} /{" "}
                                {plan.template.frequency}
                            </Typography>
                        </Box>

                        <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{
                                backgroundColor: "#388e3c",
                                "&:hover": { backgroundColor: "#2e7d32" },
                            }}
                        >
                            Confirm Subscription
                        </Button>
                    </Card>
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
