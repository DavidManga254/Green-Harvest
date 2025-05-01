import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Location from "../api/Location";

const useNearbyFarmers = (radius: number = 50) => {
    const [coords, setCoords] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);

    useEffect(() => {
        getCurrentLocation()
            .then((position) => {
                const { latitude, longitude } = position.coords;
                setCoords({ latitude, longitude });
            })
            .catch((err) => {
                console.error("Failed to get user location", err);
            });
    }, []);

    const query = useQuery({
        queryKey: coords
            ? ["farmersNearby", coords.latitude, coords.longitude, radius]
            : ["farmersNearby", null],
        queryFn: () => {
            if (!coords) throw new Error("No coordinates available yet");
            return Location.getFarmersNearby({
                latitude: coords.latitude,
                longitude: coords.longitude,
                radius,
            });
        },
        enabled: !!coords,
        staleTime: 1000 * 60 * 5,
    });

    return {
        ...query,
        coords,
    };
};

export default useNearbyFarmers;

const getCurrentLocation = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported"));
        }

        navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
        });
    });
};
