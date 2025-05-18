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
    Skeleton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useQuery } from "@tanstack/react-query";
import User from "../../../api/User";
import { Link } from "@tanstack/react-router";

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

    if (isLoading) {
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
                    Select from our farmer's available subscription options
                    tailored for fresh, healthy eating.
                </Typography>

                <Grid
                    container
                    rowSpacing={10}
                    columnSpacing={4}
                    justifyContent="center"
                >
                    {[...Array(6)].map((_, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                elevation={3}
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                }}
                            >
                                <Skeleton
                                    variant="rectangular"
                                    height={160}
                                    sx={{ borderRadius: 1 }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Skeleton
                                        variant="text"
                                        width="60%"
                                        height={32}
                                        sx={{ mx: "auto", mb: 1 }}
                                    />
                                    <Skeleton
                                        variant="text"
                                        width="50%"
                                        height={24}
                                        sx={{ mx: "auto", mb: 2 }}
                                    />
                                    <Divider sx={{ my: 2 }} />
                                    <Skeleton width="90%" height={20} />
                                    <Skeleton width="80%" height={20} />
                                    <Skeleton width="70%" height={20} />
                                </CardContent>

                                <Box mt={2} px={2}>
                                    <Skeleton
                                        variant="text"
                                        width="80%"
                                        height={30}
                                        sx={{ mx: "auto" }}
                                    />
                                </Box>

                                <Box mt={3} px={2} pb={2}>
                                    <Skeleton
                                        variant="rectangular"
                                        height={40}
                                        sx={{ borderRadius: 2 }}
                                    />
                                </Box>

                                <Box textAlign="center" pb={2}>
                                    <Skeleton
                                        width="50%"
                                        height={16}
                                        sx={{ mx: "auto" }}
                                    />
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
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
