import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    Button,
    useTheme,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import React from "react";
import { Link } from "@tanstack/react-router";

const AboutPage: React.FC = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: { xs: 3, md: 6 } }}>
            {/* Intro Section */}
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom color="primary">
                        100% Trusted Organic Food Store
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Ecobazar is your go-to destination for fresh, locally
                        sourced organic food. We partner with trusted farmers to
                        deliver quality produce that supports your health and
                        the planet.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661302885821-083e5add3791?q=80&w=2070&auto=format&fit=crop"
                        alt="Organic Farmer"
                        width="100%"
                        style={{ borderRadius: 12 }}
                    />
                </Grid>
            </Grid>

            {/* Features Section */}
            <Box
                sx={{
                    mt: 6,
                    py: 4,
                    px: 2,
                    backgroundColor: "#e8f5e9",
                    borderRadius: 4,
                }}
            >
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1678344176721-24f0465033b9?q=80&w=2071&auto=format&fit=crop"
                            alt="Happy Farmer"
                            width="100%"
                            style={{ borderRadius: 12 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            color="success.dark"
                        >
                            Why Choose Us?
                        </Typography>
                        {[
                            {
                                icon: <ThumbUpAltIcon />,
                                text: "100% Organic Produce",
                            },
                            {
                                icon: <SupportAgentIcon />,
                                text: "24/7 Customer Support",
                            },
                            {
                                icon: <VerifiedUserIcon />,
                                text: "Money-back Guarantee",
                            },
                            {
                                icon: <LocalShippingIcon />,
                                text: "Free Shipping Available",
                            },
                        ].map((item, idx) => (
                            <Box
                                display="flex"
                                alignItems="center"
                                mb={2}
                                key={idx}
                            >
                                {React.cloneElement(item.icon, {
                                    color: "success",
                                    sx: { mr: 2 },
                                })}
                                <Typography color="text.primary">
                                    {item.text}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Box>

            {/* Delivery Message */}
            <Grid container spacing={4} alignItems="center" mt={8}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom color="primary.dark">
                        We Delivered, You Enjoy Your Order.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        color="text.secondary"
                    >
                        Every order is handpicked, packed with care, and
                        delivered with a smile. We prioritize freshness,
                        punctuality, and satisfaction.
                    </Typography>
                    <Box
                        component="ul"
                        sx={{ pl: 3, mb: 2, color: "success.dark" }}
                    >
                        <li>Fresh produce in every box</li>
                        <li>Eco-friendly packaging</li>
                        <li>Same-day delivery in select areas</li>
                    </Box>
                    <Link to="/shop">
                        <Button variant="contained" color="success">
                            Shop Now
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1683147633538-eeaf8618dccc?q=80&w=2071&auto=format&fit=crop"
                        alt="Delivery Guy"
                        width="100%"
                        style={{ borderRadius: 12 }}
                    />
                </Grid>
            </Grid>

            {/* Testimonials */}
            <Box mt={10}>
                <Typography variant="h5" gutterBottom color="primary">
                    Client Testimonials
                </Typography>
                <Grid container spacing={4}>
                    {testimonials.map((t, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Card
                                sx={{
                                    backgroundColor: "#f1f8e9",
                                    boxShadow: 3,
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        color="text.primary"
                                    >
                                        “{t.text}”
                                    </Typography>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        mt={2}
                                    >
                                        <Avatar
                                            sx={{
                                                bgcolor: "success.main",
                                                mr: 2,
                                            }}
                                        >
                                            {t.name.charAt(0)}
                                        </Avatar>
                                        <Box>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.primary"
                                            >
                                                {t.name}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {t.role}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default AboutPage;

const testimonials = [
    {
        name: "Robert Fox",
        role: "Customer",
        rating: 5,
        text: "Fresh produce and timely delivery! Absolutely love the variety they offer.",
    },
    {
        name: "Dianne Russell",
        role: "Customer",
        rating: 5,
        text: "Customer service is top-notch and the packaging is eco-friendly.",
    },
    {
        name: "Eleanor Pena",
        role: "Customer",
        rating: 5,
        text: "I appreciate their commitment to organic products. Highly recommended!",
    },
];
