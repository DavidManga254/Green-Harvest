import {
    Box,
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Container,
} from "@mui/material";
import { LocalShipping, Lock, Payment, Verified } from "@mui/icons-material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Produce from "../../api/Produce";
import Cart from "../../api/Cart";
import displayNotification from "../../lib/displayNotification";
import ProductCard2 from "../../components/ProductCard2";

// Sample data
const categories = [
    "Fresh Fruit",
    "Fresh Vegetables",
    "Meat & Fish",
    "Baking Needs",
    "Dairy",
];

const imageUrls = [
    "src/assets/images/banner1.png",
    "src/assets/images/banner2.png",
    "src/assets/images/banner3.png",
];

export default function GreenHarvestPage() {
    const {
        data: popularProduce,
        // error,
        // isLoading,
    } = useQuery({
        queryKey: [`Produce list popular`],
        queryFn: () => {
            return Produce.getProduce(8, 2);
        },
    });

    return (
        <Box sx={{ backgroundColor: "#f9f9f9" }}>
            {/* HERO SECTION */}
            <Box sx={{ py: 4 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Box
                                sx={{
                                    color: "white",
                                    borderRadius: 2,
                                    p: 4,
                                    height: 300,
                                    backgroundImage:
                                        'url("src/assets/images/farmerr.jpg")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "right",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <Typography variant="h4">
                                    Fresh & Healthy Organic Food
                                </Typography>
                                <Typography sx={{ mt: 1 }}>
                                    Save up to 35% off
                                </Typography>
                                <Button variant="contained" sx={{ mt: 2 }}>
                                    Shop Now
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2,
                                }}
                            >
                                <Card sx={{ p: 2 }}>
                                    <Typography variant="h6">
                                        Special Products
                                    </Typography>
                                    <Typography variant="body2">
                                        Deal of the Month
                                    </Typography>
                                </Card>
                                <Card sx={{ p: 2 }}>
                                    <Typography variant="h6">
                                        Up to 75% OFF
                                    </Typography>
                                    <Typography variant="body2">
                                        Organic Veggies
                                    </Typography>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* FEATURES */}
            <Container sx={{ py: 3 }}>
                <Grid container spacing={2} justifyContent="center">
                    {[
                        { icon: <LocalShipping />, label: "Free Shipping" },
                        { icon: <Lock />, label: "Customer Support 24/7" },
                        { icon: <Payment />, label: "100% Secure Payment" },
                        { icon: <Verified />, label: "Money-Back Guarantee" },
                    ].map((item, idx) => (
                        <Grid item key={idx}>
                            <Box textAlign="center">
                                <IconButton color="success">
                                    {item.icon}
                                </IconButton>
                                <Typography variant="body2">
                                    {item.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* POPULAR CATEGORIES */}
            <Container sx={{ py: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Popular Categories
                </Typography>
                <Grid container spacing={2}>
                    {categories.map((cat, i) => (
                        <Grid item xs={4} sm={2.4} key={i}>
                            <Card
                                sx={{ textAlign: "center", p: 1, height: 180 }}
                            >
                                <CardMedia
                                    component="img"
                                    height="130"
                                    image={`src/assets/images/${i + 1}.png`}
                                    alt={cat}
                                    sx={{ objectFit: "contain" }}
                                />
                                <CardContent>
                                    <Typography variant="body2">
                                        {cat}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* POPULAR PRODUCTS */}
            <Container sx={{ py: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Popular Products
                </Typography>
                <Grid container spacing={2}>
                    {popularProduce?.data.map((product) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            display="flex"
                            key={product.id}
                        >
                            <ProductCard2 product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* FULL WIDTH PROMO BANNER */}
            <Box sx={{ py: 4, px: 2 }}>
                <Grid container spacing={2}>
                    {imageUrls.map((url, index) => (
                        <Grid item xs={10} sm={4} key={index}>
                            <Box
                                component="img"
                                src={url}
                                alt={`Promo ${index + 1}`}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: 2,
                                    display: "block",
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
