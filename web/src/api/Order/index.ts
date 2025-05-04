import AxiosApi from "..";

interface OrderItem {
    produce_id: number;
    quantity: number;
}

interface PlaceOrderPayload {
    items: OrderItem[];
    discount?: number;
    payment_method: string;
}

interface UpdateOrderStatusPayload {
    status: "order_received" | "processing" | "on_the_way" | "delivered";
}

class OrderApi {
    /**
     * Place a new order
     */
    async placeOrder(payload: PlaceOrderPayload) {
        try {
            const response = await AxiosApi.post("/orders", payload);
            return response.data;
        } catch (error) {
            console.error("Failed to place order", error);
            throw error;
        }
    }

    /**
     * Fetch the authenticated user's order history
     */
    async getOrderHistory(
        params: { page?: number; data_per_page?: number } = {},
    ) {
        try {
            const response = await AxiosApi.get("/orders", { params });

            return {
                orders: response.data.data || [],
                pagination: response.data.pagination || {
                    current_page: 1,
                    last_page: 1,
                    total: 0,
                    per_page: 10,
                },
            };
        } catch (error) {
            console.error("Failed to fetch order history", error);
            throw error;
        }
    }

    /**
     * Get specific order details
     */
    async getOrderDetails(orderId: number | string) {
        try {
            const response = await AxiosApi.get(`/orders/${orderId}`);
            return response.data.order_details;
        } catch (error) {
            console.error("Failed to fetch order details", error);
            throw error;
        }
    }

    /**
     * Update the status of an order (if allowed)
     */
    async updateOrderStatus(
        orderId: number | string,
        payload: UpdateOrderStatusPayload,
    ) {
        try {
            const response = await AxiosApi.patch(
                `/orders/${orderId}/status`,
                payload,
            );
            return response.data;
        } catch (error) {
            console.error("Failed to update order status", error);
            throw error;
        }
    }
}

export default new OrderApi();
