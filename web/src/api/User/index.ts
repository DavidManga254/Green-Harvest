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
}

export default new UserApi();
