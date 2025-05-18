import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import "./index.css";

// Custom icons
const deliveryIcon = new L.Icon({
    iconUrl: "/src/assets/images/green-marker.png", // ✅ move to /public/icons
    iconSize: [35, 35],
    iconAnchor: [17, 34],
});

const destinationIcon = new L.Icon({
    iconUrl: "/src/assets/images/marker.png", // ✅ move to /public/icons
    iconSize: [30, 30],
    iconAnchor: [15, 30],
});

// Auto-fit map view between two markers
const FitBounds = ({ currentLocation, destination }) => {
    const map = useMap();

    useEffect(() => {
        const bounds = L.latLngBounds([
            [currentLocation.lat, currentLocation.lng],
            [destination.lat, destination.lng],
        ]);
        map.fitBounds(bounds, { padding: [50, 50] });
    }, [map, currentLocation, destination]);

    return null;
};

const OrderTrackingMap = ({ currentLocation, destination }) => {
    if (!currentLocation || !destination) return null;

    return (
        <MapContainer
            center={currentLocation}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "300px", width: "100%", borderRadius: "8px" }}
        >
            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={currentLocation} icon={deliveryIcon}>
                <Popup>Product Location</Popup>
            </Marker>

            <Marker position={destination} icon={destinationIcon}>
                <Popup>Your Location</Popup>
            </Marker>

            <FitBounds
                currentLocation={currentLocation}
                destination={destination}
            />
        </MapContainer>
    );
};

export default OrderTrackingMap;
