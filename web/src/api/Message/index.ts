import AxiosApi from "..";

class MessageApi {
    async sendMessage(payload: { vendor_id: number; message: string }) {
        try {
            const response = await AxiosApi.post("/messages", payload);
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
}

export default new MessageApi();
