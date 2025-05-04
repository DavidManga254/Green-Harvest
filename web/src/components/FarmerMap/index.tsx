import useCurrentLocation from "../../utils/useCurrentLocation";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

const userIcon = L.divIcon({
    html: `<div style="background: #00c853; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 14px;">🧍</div>`,
    className: "",
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});

const createProfileIcon = (imageUrl) =>
    L.divIcon({
        html: `<div style="background: white; border: 3px solid #00c853; border-radius: 50%; width: 40px; height: 40px; overflow: hidden; box-shadow: 0 0 5px rgba(0,0,0,0.3);">
      <img src="${imageUrl}" style="width: 100%; height: 100%; object-fit: cover;" />
    </div>`,
        className: "",
        iconSize: [40, 40],
        iconAnchor: [20, 20],
    });

const FarmerMap = ({ farmers }) => {
    const { location } = useCurrentLocation();

    return (
        <MapContainer
            center={[-1.2921, 36.8219]}
            zoom={12}
            style={{ height: "90vh", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />

            {location && (
                <Marker position={[location.lat, location.lng]} icon={userIcon}>
                    <Popup>You are here</Popup>
                </Marker>
            )}

            <MarkerClusterGroup chunkedLoading>
                {farmers?.map((farmer) => (
                    <Marker
                        key={farmer.id}
                        position={[farmer.latitude, farmer.longitude]}
                        icon={createProfileIcon(farmer.profile_image)}
                    >
                        <Popup>
                            <div>
                                <img
                                    src={farmer.profile_image}
                                    alt="Profile"
                                    width="50"
                                />
                                <p>Farmer ID: {farmer.id}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
};

export default FarmerMap;
