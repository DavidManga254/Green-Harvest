import AxiosApi from "..";

class UserApi {
    async login(userLoginInfo: { email: string; password: string }) {
        try {
            const response = await AxiosApi.post("/login", userLoginInfo);

            return response.data;
        } catch (e) {
            console.log("error loggin in", e);
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
            console.log("error registering user in", e);
            throw e;
        }
    }
}

export default new UserApi();
