// components/FarmerMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box, Typography } from "@mui/material";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icon (Leaflet's default doesn't load properly in some builds)
const markerIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const SingleFarmerMap = ({
    name,
    latitude,
    longitude,
}: {
    name: string;
    latitude: number;
    longitude: number;
}) => {
    return (
        <Box sx={{ height: 400, mt: 2, borderRadius: 2, overflow: "hidden" }}>
            <MapContainer
                center={[latitude, longitude]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]} icon={markerIcon}>
                    <Popup>
                        <Typography fontWeight="bold">{name}</Typography>
                        <Typography variant="caption">
                            Farmer's Location
                        </Typography>
                    </Popup>
                </Marker>
            </MapContainer>
        </Box>
    );
};

export default SingleFarmerMap;
