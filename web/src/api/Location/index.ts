import AxiosApi from "..";

class LocationApi {
    async getFarmersNearby(LocationDetails: {
        latitude: string | number;
        longitude: string | number;
        radius: string | number;
    }) {
        try {
            const response = await AxiosApi.get("/users/farmers/nearby", {
                params: LocationDetails,
            });

            return response.data;
        } catch (e) {
            console.log("error fetching narby farmers", e);
            throw e;
        }
    }
}

export default new LocationApi();
