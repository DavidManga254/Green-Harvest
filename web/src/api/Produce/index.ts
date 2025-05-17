import AxiosApi from "..";

class ProduceApi {
    async getProduce(result_per_page: number = 20, page?: number) {
        try {
            const queryParam = `data_per_page=${result_per_page}${page ? `&page=${page}` : ""}`;

            const response = await AxiosApi.get(`/produce?${queryParam}`);

            return response.data;
        } catch (e) {
            console.log("error fetching produce results", e);
            throw e;
        }
    }

    async getProductDetails(productId: number | string) {
        try {
            const response = await AxiosApi.get(`/produce/${productId}`);

            return response.data;
        } catch (e) {
            console.log("error fetching produce details", e);
            throw e;
        }
    }

    async getProductReviews(productId: number | string, page = 1, perPage = 5) {
        try {
            const response = await AxiosApi.get(
                `/products/${productId}/reviews?page=${page}&per_page=${perPage}`,
            );

            return response.data;
        } catch (e) {
            console.log("error fetching product reviews", e);
            throw e;
        }
    }
}

export default new ProduceApi();
