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

    async searchProduce({
        name,
        category,
        season,
        available,
        on_sale,
        page = 1,
        result_per_page = 20,
    }: {
        name?: string;
        category?: string;
        season?: string;
        available?: boolean;
        on_sale?: boolean;
        page?: number;
        result_per_page?: number;
    }) {
        try {
            const params = new URLSearchParams();

            params.append("data_per_page", result_per_page.toString());
            params.append("page", page.toString());

            if (name) params.append("name", name);
            if (category) params.append("category", category);
            if (season) params.append("season", season);
            if (available !== undefined)
                params.append("available", String(available));
            if (on_sale !== undefined)
                params.append("on_sale", String(on_sale));

            const response = await AxiosApi.get(
                `/produce/search?${params.toString()}`,
            );

            return response.data;
        } catch (e) {
            console.log("error searching produce", e);
            throw e;
        }
    }
}

export default new ProduceApi();
