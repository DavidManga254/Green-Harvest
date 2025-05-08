import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    Container,
    Divider,
    CardMedia,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useQuery } from "@tanstack/react-query";
import User from "../../../api/User";
import { Link } from "@tanstack/react-router";

const samplePlans = [
    {
        id: 1,
        template: {
            name: "Weekly Kale Box",
            frequency: "Weekly",
            description:
                "A fresh bundle of organically grown kale delivered every week.",
            base_price: 350,
        },
        produce: {
            name: "Kale",
            image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
        },
        highlight: "Great for Healthy Eating",
        reviews: 24,
        farmer: {
            user: {
                name: "Mama Achieng",
                profile_image: "https://i.imgur.com/0y8Ftya.png",
            },
        },
    },
    {
        id: 2,
        template: {
            name: "Monthly Fruit Mix",
            frequency: "Monthly",
            description:
                "A curated mix of seasonal fruits including bananas, oranges, and apples.",
            base_price: 1200,
        },
        produce: {
            name: "Mixed Fruits",
            image: "https://images.unsplash.com/photo-1582515073490-dc0c3b46f89e",
        },
        highlight: "Most Popular",
        reviews: 31,
        farmer: {
            user: {
                name: "GreenHarvest Co.",
                profile_image: "https://i.imgur.com/oWcyZQk.png",
            },
        },
    },
    {
        id: 3,
        template: {
            name: "Custom Vegetable Basket",
            frequency: "Bi-weekly",
            description: "Build your own veggie box from available produce.",
            base_price: 950,
        },
        produce: {
            name: "Mixed Vegetables",
            image: "https://images.unsplash.com/photo-1582281298057-3e6d1162da5b",
        },
        highlight: "Custom Selection",
        reviews: 17,
        farmer: {
            user: {
                name: "Fresh Roots Farm",
                profile_image: "https://i.imgur.com/farmavatar.png",
            },
        },
    },
    {
        id: 4,
        template: {
            name: "Organic Herb Pack",
            frequency: "Weekly",
            description:
                "A mix of fresh organic herbs including basil, parsley, and mint.",
            base_price: 400,
        },
        produce: {
            name: "Herbs",
            image: "https://images.unsplash.com/photo-1622737131574-b29c6dce46c9",
        },
        highlight: "Fresh & Aromatic",
        reviews: 12,
        farmer: {
            user: {
                name: "Herbal Haven",
                profile_image: "https://i.imgur.com/farmavatar.png",
            },
        },
    },
    {
        id: 5,
        template: {
            name: "Farmers' Surprise Box",
            frequency: "Monthly",
            description:
                "A surprise mix of the freshest in-season produce from our fields.",
            base_price: 800,
        },
        produce: {
            name: "Seasonal Produce",
            image: "https://images.unsplash.com/photo-1587750051635-3a7f84cf61c5",
        },
        highlight: "Farmer's Pick",
        reviews: 8,
        farmer: {
            user: {
                name: "Mama Achieng",
                profile_image: "https://i.imgur.com/0y8Ftya.png",
            },
        },
    },
];

interface FarmerSubscriptionPageInterface {
    farmerId: string | number;
}

const FarmerSubscriptionPage: React.FC<FarmerSubscriptionPageInterface> = ({
    farmerId,
}) => {
    const {
        data: FarmerSubscriptionPlans,
        isLoading,
        error: subscriptionFetchError,
    } = useQuery({
        queryKey: [`farmer subscription ${farmerId}`],
        queryFn: () => User.getAvailableSubscriptionPlans(farmerId),
        enabled: !!farmerId,
        staleTime: 1000 * 60 * 20,
    });

    if (isLoading)
        return <Typography align="center">Loading plans...</Typography>;
    if (subscriptionFetchError)
        return (
            <Typography align="center" color="error">
                Failed to load subscription plans
            </Typography>
        );
    if (!FarmerSubscriptionPlans?.length)
        return (
            <Typography align="center">No subscriptions available.</Typography>
        );

    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
            <Typography variant="h4" gutterBottom textAlign="center">
                Choose Your Subscription Plan
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
                mb={4}
            >
                Select from our farmer's available subscription options tailored
                for fresh, healthy eating.
            </Typography>

            <Grid
                container
                rowSpacing={10}
                columnSpacing={4}
                justifyContent="center"
            >
                {FarmerSubscriptionPlans.map((plan: any) => (
                    <Grid item xs={12} sm={6} md={4} key={plan.id}>
                        <Card
                            elevation={3}
                            sx={{
                                p: 2,
                                borderTop: "5px solid #388e3c",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            {/* Show static image fallback if none */}
                            {plan?.cover_image && (
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image={
                                        plan.cover_image ||
                                        plan.produce?.image ||
                                        "/images/default-basket.jpg" // optional fallback
                                    }
                                    alt={plan.template.name}
                                    sx={{ objectFit: "cover", borderRadius: 1 }}
                                />
                            )}
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    variant="h6"
                                    color="text.primary"
                                    textAlign="center"
                                    gutterBottom
                                >
                                    {plan.template.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    textAlign="center"
                                    fontWeight="bold"
                                    color="success.main"
                                >
                                    {plan.highlight}
                                </Typography>

                                <Divider sx={{ my: 2 }} />

                                <Box>
                                    {plan.highlight && (
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            mb={1}
                                        >
                                            <CheckCircleIcon
                                                fontSize="small"
                                                color="success"
                                                sx={{ mr: 1 }}
                                            />
                                            <Typography variant="body2">
                                                {plan.highlight}
                                            </Typography>
                                        </Box>
                                    )}
                                    {plan.produce && (
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            mb={1}
                                        >
                                            <CheckCircleIcon
                                                fontSize="small"
                                                color="success"
                                                sx={{ mr: 1 }}
                                            />
                                            <Typography variant="body2">
                                                Includes: {plan.produce.name}
                                            </Typography>
                                        </Box>
                                    )}
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        mb={1}
                                    >
                                        <CheckCircleIcon
                                            fontSize="small"
                                            color="success"
                                            sx={{ mr: 1 }}
                                        />
                                        <Typography variant="body2">
                                            Delivered{" "}
                                            {plan.template.frequency.toLowerCase()}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>

                            <Box mt={2} px={2}>
                                <Typography
                                    variant="h5"
                                    textAlign="center"
                                    fontWeight="bold"
                                >
                                    Ksh{" "}
                                    {Number(
                                        plan.template.base_price,
                                    ).toLocaleString()}{" "}
                                    / {plan.template.frequency.toLowerCase()}
                                </Typography>
                            </Box>

                            <Box mt={3} px={2} pb={2}>
                                <Link
                                    to="/vendor/subscriptions/subscription-detail/$subscription"
                                    params={{ subscription: plan.id }}
                                >
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            backgroundColor: "#388e3c",
                                            "&:hover": {
                                                backgroundColor: "#2e7d32",
                                            },
                                        }}
                                    >
                                        SUBSCRIBE NOW
                                    </Button>
                                </Link>
                            </Box>

                            <Box textAlign="center" pb={2}>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    ⭐ {Math.floor(Math.random() * 50) + 1}{" "}
                                    reviews
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FarmerSubscriptionPage;
