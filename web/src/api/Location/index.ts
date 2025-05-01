import AxiosApi from "..";

type LocationDetails = {
    latitude: number | string;
    longitude: number | string;
    radius: number | string;
};

class LocationApi {
    async getFarmersNearby(locationDetails: LocationDetails) {
        try {
            const response = await AxiosApi.get("/users/farmers/nearby", {
                params: locationDetails,
            });

            return response.data;
        } catch (error) {
            console.error("Error fetching nearby farmers:", error);
            throw error;
        }
    }
}

export default new LocationApi();
