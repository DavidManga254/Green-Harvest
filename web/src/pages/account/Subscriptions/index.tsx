import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import User from "../../../api/User";
import { Link } from "@tanstack/react-router";
import { toast } from "react-toastify";

const SubscriptionsPage = () => {
    const {
        data: subscriptions,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["user-subscriptions"],
        queryFn: () => User.getUserSubscriptions(),
        staleTime: 1000 * 60 * 20,
    });

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

    if (isLoading) {
        return <Typography>Loading subscriptions...</Typography>;
    }

    if (isError) {
        return (
            <Typography color="error">
                Failed to load subscriptions. Please try again later.
            </Typography>
        );
    }

    const handleCancelSubscription = (subscriptionId: number) => {
        cancelSubscription(subscriptionId);
    };

    return (
        <Grid container spacing={3}>
            {subscriptions.map((plan) => (
                <Grid item xs={12} sm={6} md={4} key={plan.id}>
                    <Link
                        to="/vendor/subscriptions/subscription-detail/$subscription"
                        params={{ subscription: plan.subscription_plan_id }}
                        key={plan.id}
                    >
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
                            <CardMedia
                                component="img"
                                height="160"
                                image={
                                    plan.image_url ||
                                    "/images/default-basket.jpg"
                                }
                                alt={plan.name}
                                sx={{ objectFit: "cover", borderRadius: 1 }}
                            />

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    variant="h6"
                                    color="text.primary"
                                    textAlign="center"
                                    gutterBottom
                                >
                                    {plan.name}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    textAlign="center"
                                    fontWeight="bold"
                                    color="success.main"
                                >
                                    {plan.description?.slice(0, 80)}
                                </Typography>

                                <Divider sx={{ my: 2 }} />

                                <Box>
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
                                            Delivered {plan.frequency}
                                        </Typography>
                                    </Box>

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
                                            Subscribed with: {plan.farmer.name}
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
                                    Ksh {Number(plan.price).toLocaleString()} /{" "}
                                    {plan.frequency}
                                </Typography>
                            </Box>

                            <Box mt={3} px={2} pb={2}>
                                <Link
                                // to="/user/subscriptions/$subscription"
                                // params={{ subscription: plan.id }}
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
                                            fontSize: "12px",
                                        }}
                                        onClick={() =>
                                            handleCancelSubscription(plan.id)
                                        }
                                    >
                                        CANCEL SUBSCRIPTION
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
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default SubscriptionsPage;
