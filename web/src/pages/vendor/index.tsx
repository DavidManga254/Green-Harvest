import {
    Box,
    Typography,
    Avatar,
    Button,
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
    Skeleton,
} from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { useState } from "react";
import Farmer from "../../api/Farmer";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import SingleFarmerMap from "../../components/SingleFarmerMap";
import ProductCard2 from "../../components/ProductCard2";

interface VendorPageInterface {
    id: string | number;
}

const VendorPage: React.FC<VendorPageInterface> = ({ id }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [page, setPage] = useState(1);
    const [imagePreview, setImagePreview] = useState(null);
    const [sort, setSort] = useState("latest");
    // const itemsPerPage = 12;

    const {
        data: farmerOverview,
        isLoading: farmerOverviewLoading,
        // isError: farmerProduceError,
        isFetching: farmerOverviewFetching,
        // refetch,
    } = useQuery({
        queryKey: ["farmerOverview", id, page],
        queryFn: () => Farmer.getFarmerOverview(id),
        placeholderData: (previousData) => previousData,
        gcTime: 5 * 60 * 1000, // cache data for 5 minutes
    });

    const {
        data: farmerProduce,
        isLoading: farmerProduceLoading,
        // isError: farmerProduceError,
        isFetching: farmerisFetching,
        // refetch,
    } = useQuery({
        queryKey: ["farmerProduce", id, page],
        queryFn: () =>
            Farmer.getFarmerProducts(id, {
                page,
                data_per_page: 12,
            }),
        placeholderData: (previousData) => previousData,
        gcTime: 5 * 60 * 1000, // cache data for 5 minutes
    });

    const products = farmerProduce?.products || [];
    const pagination = farmerProduce?.pagination || {};

    const {
        data: farmerReviews,
        isLoading: farmerReviewsLoading,
        // isError: farmerReviewsError,
        // isFetching: farmerReviewsFetching,
        // refetch: refetchFarmerReviews,
    } = useQuery({
        queryKey: ["farmerReviews", id, page, sort],
        queryFn: () =>
            Farmer.getFarmerReviews(id, {
                page,
                data_per_page: 6,
                sort,
            }),
        placeholderData: (previousData) => previousData,
        gcTime: 5 * 60 * 1000,
    });

    const handlePageChange = (_event: any, value: number) => {
        setPage(value);
    };

    const [bioOpen, setBioOpen] = useState(false);
    const handleBioOpen = () => setBioOpen(true);
    const handleBioClose = () => setBioOpen(false);

    const fullBio = `Hi there! I'm Mama Achieng, a dedicated organic farmer with over 15 years of experience growing fresh vegetables, fruits, and herbs. My passion lies in sustainable agriculture and empowering local communities through healthy food and eco-friendly farming practices. From sunrise to sunset, I'm out in the fields tending to crops, caring for animals, and sharing knowledge with other small-scale farmers. Whether you're here for fresh produce or to learn more about farm life, you're most welcome!`;

    const shortBio = fullBio.slice(0, 100) + "...";

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const handleSortChange = (event) => setSort(event.target.value);

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
                    {farmerOverviewLoading ? (
                        <Skeleton variant="circular" width={100} height={100} />
                    ) : (
                        <Avatar
                            src={farmerOverview?.profile_image}
                            alt={farmerOverview?.name}
                            sx={{ width: 100, height: 100 }}
                        />
                    )}
                </Grid>
                <Grid item xs>
                    {farmerOverviewLoading ? (
                        <>
                            <Skeleton width={200} height={32} />
                            <Skeleton width={180} height={20} />
                        </>
                    ) : (
                        <>
                            <Typography variant="h5" fontWeight="bold">
                                {farmerOverview?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {farmerOverview?.subscriber_count} subscribers ·{" "}
                                {farmerOverview?.produce_count} products
                            </Typography>
                        </>
                    )}

                    {farmerOverviewLoading ? (
                        <>
                            <Skeleton width="100%" height={20} />
                            <Skeleton width="80%" height={20} />
                        </>
                    ) : farmerOverview?.description ? (
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            {farmerOverview.description.length > 100
                                ? `${farmerOverview.description.slice(0, 100)}...`
                                : farmerOverview.description}{" "}
                            {farmerOverview.description.length > 100 && (
                                <Button
                                    style={{ color: "var(--green)" }}
                                    size="small"
                                    onClick={handleBioOpen}
                                >
                                    Read More
                                </Button>
                            )}
                        </Typography>
                    ) : (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 1 }}
                        >
                            No bio provided.
                        </Typography>
                    )}

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
                    {/*<Button
                        variant="contained"
                        style={{ backgroundColor: "var(--green)" }}
                    >
                        Subscribed
                    </Button>*/}
                    <Link to="/vendor/subscriptions/$id" params={{ id: id }}>
                        <Button variant="outlined" style={{ color: "green" }}>
                            View Subscription Plans
                        </Button>
                    </Link>
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
                    {farmerProduceLoading || farmerisFetching ? (
                        // Skeleton loader while fetching or initial loading
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            {[...Array(8)].map((_, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card>
                                        <Skeleton
                                            variant="rectangular"
                                            height={160}
                                        />
                                        <CardContent>
                                            <Skeleton width="80%" />
                                            <Skeleton width="60%" />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <>
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                {products.map((product) => (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        key={product.id}
                                    >
                                        <ProductCard2 product={product} />
                                    </Grid>
                                ))}
                            </Grid>

                            {pagination.last_page > 1 && (
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    mt={4}
                                >
                                    <Pagination
                                        count={pagination.last_page}
                                        page={pagination.current_page}
                                        onChange={handlePageChange}
                                        color="primary"
                                    />
                                </Box>
                            )}
                        </>
                    )}
                </Box>
            )}

            {tabIndex === 1 && (
                <Box sx={{ mt: 2 }}>
                    {/* Sort Dropdown */}
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

                    {/* Loading State */}
                    {farmerReviewsLoading ? (
                        Array.from({ length: 3 }).map((_, i) => (
                            <Card key={i} sx={{ mb: 2, p: 2 }}>
                                <Skeleton variant="text" width="60%" />
                                <Skeleton variant="text" width="40%" />
                                <Skeleton
                                    variant="rectangular"
                                    height={80}
                                    sx={{ mt: 1 }}
                                />
                            </Card>
                        ))
                    ) : farmerReviews?.data?.length ? (
                        <>
                            {/* Review List */}
                            {farmerReviews.data.map((review) => (
                                <Card key={review.id} sx={{ mb: 2, p: 2 }}>
                                    <Grid
                                        container
                                        spacing={2}
                                        alignItems="flex-start"
                                    >
                                        <Grid item>
                                            <Avatar>
                                                {review.user.charAt(0)}
                                            </Avatar>
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
                                                        setImagePreview(
                                                            review.image,
                                                        )
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

                            {/* Pagination */}
                            {farmerReviews.meta?.last_page > 1 && (
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    mt={4}
                                >
                                    <Pagination
                                        count={farmerReviews.meta.last_page}
                                        page={farmerReviews.meta.current_page}
                                        onChange={(_, newPage) =>
                                            setPage(newPage)
                                        }
                                        color="primary"
                                    />
                                </Box>
                            )}
                        </>
                    ) : (
                        <Typography>No reviews found.</Typography>
                    )}

                    {/* Image Modal */}
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
                    {farmerOverviewLoading ? (
                        <Skeleton variant="rectangular" height={400} />
                    ) : farmerOverview?.latitude &&
                      farmerOverview?.longitude ? (
                        <SingleFarmerMap
                            name={farmerOverview.name}
                            latitude={parseFloat(farmerOverview.latitude)}
                            longitude={parseFloat(farmerOverview.longitude)}
                        />
                    ) : (
                        <Typography>
                            No location data available for this farmer.
                        </Typography>
                    )}
                </Box>
            )}
        </Box>
    );
};

export default VendorPage;
