import AxiosInstance from "../../helper/AxiosInstance";
export const register = async (email, password) => {
    try {
        const body =
        {
            email: email,
            password: password
        }
        const res = await AxiosInstance().post('/users/register', body)
        console, console.log('register response', res);
        return res;
    } catch (error) {
        console.log("register error", error);
        return error;
    }
}
export const login = async (email, password) => {
    try {
        const body =
        {
            email: email,
            password: password
        }
        const res = await AxiosInstance().post('/auth/login', body)
        console, console.log('register response', res);
        return res;
    } catch (error) {
        console.log("register error", error);
        return error;
    }
}