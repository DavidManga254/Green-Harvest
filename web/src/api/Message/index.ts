import AxiosApi from "..";

class MessageApi {
    private chatToken: string | null = null;
    private expiresAt: number | null = null;

    private async ensureChatTokenValid() {
        const now = Date.now();

        // If token doesn't exist or is about to expire in next 30 seconds
        if (
            !this.chatToken ||
            !this.expiresAt ||
            now > this.expiresAt - 30_000
        ) {
            try {
                const response = await AxiosApi.post("/chat/token");
                this.chatToken = response.data.chat_token;
                this.expiresAt = new Date(response.data.expires_at).getTime();
            } catch (e) {
                console.error("Failed to get chat session token", e);
                throw e;
            }
        }

        return this.chatToken;
    }

    async getValidChatToken() {
        return await this.ensureChatTokenValid();
    }

    async sendMessage(payload: {
        vendor_id: number;
        message: string;
        product_id?: number;
    }) {
        try {
            const response = await AxiosApi.post(
                "/messages/customer/store",
                payload,
            );
            return response.data;
        } catch (e) {
            console.error("Error sending message", e);
            throw e;
        }
    }

    async getChatMessages(chatId: number | string, page = 1) {
        try {
            const response = await AxiosApi.get(
                `/chats/${chatId}/messages?page=${page}`,
            );
            return response.data; // contains messages and pagination info
        } catch (e) {
            console.error("Error fetching chat messages", e);
            throw e;
        }
    }

    async getUserChats() {
        try {
            const response = await AxiosApi.get("/chats");
            return response.data;
        } catch (e) {
            console.error("Error fetching user chats", e);
            throw e;
        }
    }

    async getChatWithVendor(payload: { vendor_id: number }) {
        try {
            const response = await AxiosApi.post(
                "/chats/check-or-create",
                payload,
            );
            return response.data;
        } catch (e) {
            console.error("Error getting vendor chat", e);
            throw e;
        }
    }
}

export default new MessageApi();
