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
}

export default new ProduceApi();
