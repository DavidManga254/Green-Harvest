import { useState, useEffect } from "react";

const useCurrentLocation = () => {
    const [location, setLocation] = useState<{
        lat: number;
        lng: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (err) => {
                setError("Unable to retrieve your location.");
                console.error(err);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            },
        );
    }, []);

    return { location, error };
};

export default useCurrentLocation;
