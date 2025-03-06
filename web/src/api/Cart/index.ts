import AxiosApi from "..";

class CartApi {
    async getCartContent() {
        try {
            const response = await AxiosApi.get("/cart/items");

            return response.data;
        } catch (e) {
            console.log("error fetching cart content", e);
            throw e;
        }
    }

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

    async updateCartItem(cartItemDetail: { id: number; quantity: number }) {
        try {
            const response = await AxiosApi.put(
                `/cart/update/${cartItemDetail.id}`,
                {
                    quantity: cartItemDetail.quantity,
                },
            );

            return response.data;
        } catch (e) {
            console.log("error updating cart item", e);
            throw e;
        }
    }

    async removeCartItem(itemDetail: { id: number }) {
        try {
            const response = await AxiosApi.delete(
                `/cart/remove/${itemDetail.id}`,
            );

            await response.data;
        } catch (e) {
            console.log("error removing cart item", e);
            throw e;
        }
    }
}

export default new CartApi();
