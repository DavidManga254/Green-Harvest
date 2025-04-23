import {
    Box,
    Typography,
    Avatar,
    Button,
    Link,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Tabs,
    Tab,
    Pagination,
    Modal,
    MenuItem,
    Select,
} from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

export default function VendorPage() {
    const [tabIndex, setTabIndex] = useState(0);
    const [page, setPage] = useState(1);
    const [imagePreview, setImagePreview] = useState(null);
    const [sort, setSort] = useState("latest");
    const itemsPerPage = 12;

    const [bioOpen, setBioOpen] = useState(false);
    const handleBioOpen = () => setBioOpen(true);
    const handleBioClose = () => setBioOpen(false);

    const fullBio = `Hi there! I'm Mama Achieng, a dedicated organic farmer with over 15 years of experience growing fresh vegetables, fruits, and herbs. My passion lies in sustainable agriculture and empowering local communities through healthy food and eco-friendly farming practices. From sunrise to sunset, I'm out in the fields tending to crops, caring for animals, and sharing knowledge with other small-scale farmers. Whether you're here for fresh produce or to learn more about farm life, you're most welcome!`;

    const shortBio = fullBio.slice(0, 100) + "...";

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleSortChange = (event) => setSort(event.target.value);

    const paginatedProducts = products.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage,
    );

    const sortedReviews = [...reviews].sort((a, b) => {
        if (sort === "latest") return new Date(b.date) - new Date(a.date);
        if (sort === "oldest") return new Date(a.date) - new Date(b.date);
        return 0;
    });

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });

    return (
        <Box sx={{ p: 2, maxWidth: 1200, mx: "auto" }}>
            {/* Header */}
            <Box
                sx={{
                    backgroundImage:
                        'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTy-9x6uHdkksqh0BADiaoOMUgRmMQBzi-A&s")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 200,
                    borderRadius: 2,
                    mb: 2,
                }}
            />

            {/* Profile Section */}
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Avatar
                        src="https://media.istockphoto.com/id/1049653176/photo/happy-thai-female-farmer-harvesting-rice-in-countryside-thailand.jpg?s=612x612&w=0&k=20&c=BD--rcVXQNb-2IE3gg-9BVm8HQ4QqfGjGB7WOFshdJw="
                        alt="K-Wiss"
                        sx={{ width: 100, height: 100 }}
                    />
                </Grid>
                <Grid item xs>
                    <Typography variant="h5" fontWeight="bold">
                        Mama Achieng
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        102 subscribers · 15 products
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        {shortBio}{" "}
                        <Button
                            style={{ color: "var(--green)" }}
                            size="small"
                            onClick={handleBioOpen}
                        >
                            Read More
                        </Button>
                    </Typography>
                    <Modal open={bioOpen} onClose={handleBioClose}>
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                bgcolor: "background.paper",
                                boxShadow: 24,
                                p: 4,
                                borderRadius: 2,
                                width: "90%",
                                maxWidth: 500,
                                maxHeight: "80vh",
                                overflowY: "auto",
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                About K-Wiss
                            </Typography>
                            <Typography variant="body2">{fullBio}</Typography>
                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="flex-end"
                            >
                                <Button onClick={handleBioClose}>Close</Button>
                            </Box>
                        </Box>
                    </Modal>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "var(--green)" }}
                    >
                        Subscribed
                    </Button>
                </Grid>
            </Grid>

            {/* Navigation Tabs */}
            <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                sx={{ mt: 4 }}
                slotProps={{
                    indicator: {
                        style: {
                            backgroundColor: "var(--green)",
                            color: "var(--green)",
                        },
                    },
                }}
            >
                <Tab
                    style={{ color: tabIndex === 0 ? "var(--green)" : "" }}
                    label="Products"
                />
                <Tab
                    style={{ color: tabIndex === 1 ? "var(--green)" : "" }}
                    label="Vendor Reviews"
                />
                <Tab
                    style={{ color: tabIndex === 2 ? "var(--green)" : "" }}
                    label="Locate vendor"
                />
            </Tabs>

            {/* Tab Content */}
            {tabIndex === 0 && (
                <Box>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {paginatedProducts.map((product, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={product.image}
                                        alt={product.name}
                                        sx={{ objectFit: "cover", p: 1 }}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight="bold"
                                        >
                                            {product.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {product.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box display="flex" justifyContent="center" mt={4}>
                        <Pagination
                            count={Math.ceil(products.length / itemsPerPage)}
                            page={page}
                            onChange={handlePageChange}
                            color="primary"
                        />
                    </Box>
                </Box>
            )}

            {tabIndex === 1 && (
                <Box sx={{ mt: 2 }}>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={2}
                    >
                        <Typography variant="h6">Customer Reviews</Typography>
                        <Select
                            value={sort}
                            onChange={handleSortChange}
                            size="small"
                        >
                            <MenuItem value="latest">Latest</MenuItem>
                            <MenuItem value="oldest">Oldest</MenuItem>
                        </Select>
                    </Box>

                    {sortedReviews.map((review) => (
                        <Card key={review.id} sx={{ mb: 2, p: 2 }}>
                            <Grid container spacing={2} alignItems="flex-start">
                                <Grid item>
                                    <Avatar>{review.user.charAt(0)}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>
                                        {"★".repeat(review.rating)}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Color: {review.plug}
                                    </Typography>
                                    <Typography sx={{ mt: 1 }}>
                                        {review.content}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        display="block"
                                        sx={{ mt: 1 }}
                                    >
                                        {review.user} | {review.date}
                                    </Typography>
                                </Grid>
                                {review.image && (
                                    <Grid item>
                                        <img
                                            src={review.image}
                                            alt="review"
                                            style={{
                                                width: 80,
                                                cursor: "pointer",
                                                borderRadius: 4,
                                            }}
                                            onClick={() =>
                                                setImagePreview(review.image)
                                            }
                                        />
                                    </Grid>
                                )}
                                <Grid item>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        gap={1}
                                    >
                                        <ThumbUpAltOutlinedIcon fontSize="small" />
                                        <Typography variant="caption">
                                            Helpful (0)
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Card>
                    ))}

                    <Modal
                        open={!!imagePreview}
                        onClose={() => setImagePreview(null)}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                bgcolor: "background.paper",
                                boxShadow: 24,
                                p: 2,
                                maxHeight: "90vh",
                                maxWidth: "90vw",
                            }}
                        >
                            <img
                                src={imagePreview}
                                alt="Full Preview"
                                style={{ maxWidth: "100%", maxHeight: "100%" }}
                            />
                        </Box>
                    </Modal>
                </Box>
            )}

            {tabIndex === 2 && (
                <Box sx={{ mt: 2 }}>
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{
                                width: "100%",
                                height: "400px",
                                borderRadius: "8px",
                                overflow: "hidden",
                            }}
                            center={{
                                lat: 37.7749,
                                lng: -122.4194,
                            }}
                            zoom={11}
                        >
                            <Marker
                                position={{
                                    lat: 37.7749,
                                    lng: -122.4194,
                                }}
                                icon={{
                                    url: "https://yt3.googleusercontent.com/Q8u1ClHhveXr--dGYAajclsRnclWbTPFZoYLMRyrrw1Nxurnp3oYQfgiB7HiRiKFKqRHw0T9TVM=s160-c-k-c0x00ffffff-no-rj",
                                    scaledSize: new window.google.maps.Size(
                                        40,
                                        40,
                                    ),
                                    origin: new window.google.maps.Point(0, 0),
                                    anchor: new window.google.maps.Point(
                                        20,
                                        20,
                                    ),
                                }}
                            />
                        </GoogleMap>
                    ) : (
                        <Typography>Loading map...</Typography>
                    )}
                </Box>
            )}
        </Box>
    );
}

const reviews = [
    {
        id: 1,
        user: "a***u",
        date: "19 Apr 2025",
        plug: "EU Plug",
        content:
            "Everything is correct and the device looks very good quality.",
        rating: 5,
        image: "https://yt3.googleusercontent.com/Q8u1ClHhveXr--dGYAajclsRnclWbTPFZoYLMRyrrw1Nxurnp3oYQfgiB7HiRiKFKqRHw0T9TVM=s160-c-k-c0x00ffffff-no-rj",
    },
    {
        id: 2,
        user: "W***a",
        date: "19 Apr 2025",
        plug: "BR Plug",
        content: "Excellent quality product, highly recommended.",
        rating: 5,
    },
    {
        id: 3,
        user: "AliExpress Shopper",
        date: "20 Apr 2025",
        plug: "AU Plug",
        content:
            "Working well now it's been around a month. It's very cheap when compared to other products with the same specs. I don't know how long it will last but I am happy for now",
        rating: 5,
        image: "https://yt3.googleusercontent.com/Q8u1ClHhveXr--dGYAajclsRnclWbTPFZoYLMRyrrw1Nxurnp3oYQfgiB7HiRiKFKqRHw0T9TVM=s160-c-k-c0x00ffffff-no-rj",
    },
];

const products = [
    {
        name: "Apples",
        price: "Ksh14.99",
        image: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg",
        rating: 4,
    },
    {
        name: "Carrots",
        price: "Ksh14.99",
        image: "https://cdn.mos.cms.futurecdn.net/VmDx3obMsrncNiph4Lc5kW-1200-80.jpg",
        rating: 4,
    },
    {
        name: "Chanise Cabbage",
        price: "Ksh14.99",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQtjRdJG1ZIfRnxksgGkzzCwX4g-ZAXSBLg&s",
        rating: 5,
    },
    {
        name: "Ladies Finger",
        price: "$14.99",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9_3yTshma4fS59NlcAdoi-mX29pPrEWiNg&s",
        rating: 4,
        outOfStock: true,
    },
    {
        name: "Red Tomato",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 5,
    },
    {
        name: "Eggplant",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 5,
    },
    {
        name: "Fresh Cauliflower",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 4,
    },
    {
        name: "Green Apple",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 4,
    },
    {
        name: "Red Tomato",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 5,
    },
    {
        name: "Eggplant",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 5,
    },
    {
        name: "Fresh Cauliflower",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 4,
    },
    {
        name: "Green Apple",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 4,
    },
    {
        name: "Red Tomato",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 5,
    },
    {
        name: "Eggplant",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 5,
    },
    {
        name: "Fresh Cauliflower",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 4,
    },
    {
        name: "Green Apple",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 4,
    },
    {
        name: "Red Tomato",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 5,
    },
    {
        name: "Eggplant",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 5,
    },
    {
        name: "Fresh Cauliflower",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 4,
    },
    {
        name: "Green Apple",
        price: "$14.99",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sfc7dc4459530478187a4d8e1fc21b6f1t.jpg_480x480q75.jpg_.avif",
        rating: 4,
    },
];
