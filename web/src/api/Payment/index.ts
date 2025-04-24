import AxiosApi from "..";

class PaymentApi {
    async createPayment() {
        try {
            const response = await AxiosApi.get("/payment/pay");

            return response.data;
        } catch (e) {
            console.log("Error creating payment", e);
            throw e;
        }
    }

    async verifyPayment(reference: string) {
        try {
            const response = await AxiosApi.get(`/payment/verify/${reference}`);

            return response.data;
        } catch (e) {
            console.log("Error verifying payment", e);
            throw e;
        }
    }
}

export default new PaymentApi();
