import AxiosApi from "..";

class FarmerApi {
    async getFarmerProducts(
        farmerId: number | string,
        params: {
            page?: number;
            data_per_page?: number;
            [key: string]: any;
        } = {},
    ) {
        try {
            const response = await AxiosApi.get(
                `/farmer/${farmerId}/details/produce`,
                {
                    params,
                },
            );

            return {
                products: response.data.data,
                pagination: response.data.pagination,
            };
        } catch (e) {
            console.error("Error fetching farmer produce", e);
            throw e;
        }
    }

    async getFarmerReviews(
        farmerId: number | string,
        params: {
            page?: number;
            data_per_page?: number;
            sort?: string;
        } = {},
    ) {
        try {
            const response = await AxiosApi.get(
                `/farmer/${farmerId}/details/reviews`,
                { params },
            );
            return response.data;
        } catch (e) {
            console.error("Error fetching farmer reviews", e);
            throw e;
        }
    }

    async getFarmerOverview(farmerId: number | string) {
        try {
            const response = await AxiosApi.get(
                `/farmer/${farmerId}/details/overview`,
            );
            return response.data;
        } catch (e) {
            console.error("Error fetching farmer overview", e);
            throw e;
        }
    }
}

export default new FarmerApi();
