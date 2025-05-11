import AxiosApi from "..";

class PaymentApi {
    async createPayment(billingInfo: {
        full_name: string;
        address_line_1: string;
        address_line_2?: string;
        city: string;
        county: string;
        postal_code: string;
        country: string;
        notes?: string;
        phone: string;
    }) {
        try {
            const response = await AxiosApi.post("/payment/pay", billingInfo);

            return response.data;
        } catch (e) {
            console.log("Error creating payment", e);
            throw e;
        }
    }

    async subscribeToPlan(subscriptionInfo: {
        farmer_plan_id: number;
        start_date: string;
    }) {
        try {
            const response = await AxiosApi.post(
                "/subscribe",
                subscriptionInfo,
            );
            return response.data.authorization_url.url;
        } catch (e) {
            console.log("Error subscribing to plan", e);
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
