import "./index.css";
import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useQuery } from "@tanstack/react-query";
import Location from "../../api/Location";

const mapContainerStyle = {
    width: "100%",
    height: "500px",
};

const defaultCenter = {
    lat: -1.286389, // Nairobi as fallback
    lng: 36.817223,
};

const MapExplorePage: React.FC = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [radius, setRadius] = useState(10);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const coords = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                };
                setUserLocation(coords);
                setSelectedLocation(coords);
            },
            () => {
                setUserLocation(defaultCenter);
                setSelectedLocation(defaultCenter);
            },
        );
    }, []);

    const {
        data: farmerData,
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: [
            "farmersNearby",
            selectedLocation?.lat,
            selectedLocation?.lng,
            radius,
        ],
        queryFn: () =>
            Location.getFarmersNearby({
                latitude: selectedLocation.lat,
                longitude: selectedLocation.lng,
                radius,
            }),
        enabled: !!selectedLocation,
    });

    const handleMapClick = (e) => {
        const coords = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        };
        setSelectedLocation(coords);
    };

    console.log("here is default center", defaultCenter);
    console.log(farmerData);

    if (!isLoaded) return <div>Loading map...</div>;
    return (
        <div className="map-explore-page">
            <div>
                <h2>Find Farmers Near You</h2>
                <div>here is the default center {defaultCenter.toString()}</div>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={selectedLocation || defaultCenter}
                    zoom={12}
                    onClick={handleMapClick}
                >
                    {/* Marker for user or selected pin */}
                    {selectedLocation && (
                        <Marker
                            position={selectedLocation}
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                            }}
                        />
                    )}

                    <Marker
                        position={{ lat: -1.29, lng: 36.81 }}
                        icon={{
                            url: "https://via.placeholder.com/40",
                            scaledSize: new window.google.maps.Size(40, 40),
                        }}
                    />

                    {/* Render farmer markers */}
                    {/* {farmerData?.farmers.map((farmer) => (
                        <Marker
                            key={farmer.id}
                            position={{
                                lat: parseFloat(farmer.latitude),
                                lng: parseFloat(farmer.longitude),
                            }}
                            icon={{
                                url:
                                    farmer.profile_picture ||
                                    "https://via.placeholder.com/40",
                                scaledSize: new window.google.maps.Size(40, 40),
                                origin: new window.google.maps.Point(0, 0),
                                anchor: new window.google.maps.Point(20, 20),
                            }}
                            // onClick={() => {
                            //     navigate({ to: `/farmer/${farmer.id}` });
                            // }}
                        />
                    ))} */}
                </GoogleMap>

                <div style={{ marginTop: "20px" }}>
                    {isLoading && <p>Finding nearby farmers...</p>}
                    {isError && <p>Failed to load farmers.</p>}
                    {farmerData && (
                        <ul>
                            {farmerData.farmers.map((farmer) => (
                                <li key={farmer.id}>
                                    <strong>{farmer.name}</strong> -{" "}
                                    {farmer.distance.toFixed(2)} km away
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MapExplorePage;
