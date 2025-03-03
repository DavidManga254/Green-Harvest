import AxiosApi from "..";

class CartApi {
    async viewCart() {
        try {
            const response = await AxiosApi.get("/cart");

            return response.data;
        } catch (e) {
            console.log("error fetching cart summmary", e);
            throw e;
        }
    }

    async addToCart(productDetails: {
        produceId: string | number;
        quantity: number;
    }) {
        try {
            const response = await AxiosApi.post("/cart/add", productDetails);

            return response.data;
        } catch (e) {
            console.log("error adding item to cart", e);
            throw e;
        }
    }
}

export default new CartApi();
