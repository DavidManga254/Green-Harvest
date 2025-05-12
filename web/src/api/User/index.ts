import AxiosApi from "..";

class UserApi {
    async login(userLoginInfo: { email: string; password: string }) {
        try {
            const response = await AxiosApi.post("/login", userLoginInfo);
            return response.data;
        } catch (e) {
            console.log("error logging in", e);
            throw e;
        }
    }

    async register(userRegisterInfo: {
        name: string;
        email: string;
        password: string;
        phone?: string;
        role?: string;
        address?: string;
    }) {
        try {
            const response = await AxiosApi.post("/register", userRegisterInfo);
            return response.data;
        } catch (e) {
            console.log("error registering user", e);
            throw e;
        }
    }

    async getBillingAddresses() {
        try {
            const response = await AxiosApi.get("/billing-addresses");
            return response.data.addresses;
        } catch (e) {
            console.log("error fetching billing addresses", e);
            throw e;
        }
    }

    async saveBillingAddress(billingAddressInfo: {
        full_name: string;
        address_line_1: string;
        address_line_2?: string;
        city: string;
        state: string;
        postal_code: string;
        country: string;
    }) {
        try {
            const response = await AxiosApi.post(
                "/billing-addresses",
                billingAddressInfo,
            );
            return response.data;
        } catch (e) {
            console.log("error saving billing address", e);
            throw e;
        }
    }

    async getAvailableSubscriptionPlans(farmerId: string | number) {
        try {
            const response = await AxiosApi.get(
                `/available-subscription-plans/${farmerId}`,
            );
            return response.data.plans;
        } catch (e) {
            console.log("error fetching available subscription plans", e);
            throw e;
        }
    }

    async getSubscriptionPlanDetail(planId: number | string) {
        try {
            const response = await AxiosApi.get(
                `/available-subscription-plans/subscription/${planId}`,
            );
            return response.data.plan;
        } catch (e) {
            console.log("error fetching subscription plan detail", e);
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
            return response.data;
        } catch (e) {
            console.log("error subscribing to plan", e);
            throw e;
        }
    }

    async sendContactMessage(messageInfo: {
        name: string;
        email: string;
        subject: string;
        message: string;
    }) {
        try {
            const response = await AxiosApi.post("/contact/send", messageInfo);
            return response.data;
        } catch (e) {
            console.log("error sending contact message", e);
            throw e;
        }
    }
}

export default new UserApi();
