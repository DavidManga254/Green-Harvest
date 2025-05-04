import {
    Box,
    Container,
    Slider,
    Typography,
    CircularProgress,
    Alert,
    Paper,
} from "@mui/material";
import { useState } from "react";
import useNearbyFarmers from "../../utils/useNearbyFarmers";
import FarmerMap from "../../components/FarmerMap";

const FindFarmersPage: React.FC = () => {
    const [radius, setRadius] = useState(20); // Default radius
    const {
        data: farmers,
        isLoading,
        error,
        coords,
    } = useNearbyFarmers(radius);

    const handleRadiusChange = (_: Event, newValue: number | number[]) => {
        setRadius(newValue as number);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Paper
                elevation={3}
                sx={{ p: 4, mb: 4, backgroundColor: "#f9fbe7" }}
            >
                <Typography variant="h4" gutterBottom>
                    🌿 Discover Nearby Farmers
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Explore smallholder farmers around your current location.
                    Adjust the search radius to see who’s active nearby, and
                    connect with local food growers.
                </Typography>

                <Box sx={{ mb: 2 }}>
                    <Typography gutterBottom>
                        Search Radius: <strong>{radius} km</strong>
                    </Typography>
                    <Slider
                        value={radius}
                        min={10}
                        max={300}
                        step={10}
                        onChange={handleRadiusChange}
                        valueLabelDisplay="auto"
                        sx={{
                            maxWidth: 300,
                            color: "#00c853",
                        }}
                    />
                </Box>
            </Paper>

            {isLoading ? (
                <Box textAlign="center" sx={{ mt: 4 }}>
                    <CircularProgress color="success" size={60} />
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Fetching nearby farmers, please wait...
                    </Typography>
                </Box>
            ) : error ? (
                <Alert severity="error">
                    There was an error loading farmers. Please try again later.
                </Alert>
            ) : !farmers || farmers.length === 0 ? (
                <Alert severity="info">
                    No farmers found in the selected area.
                </Alert>
            ) : (
                <FarmerMap farmers={farmers} />
            )}
        </Container>
    );
};

export default FindFarmersPage;
