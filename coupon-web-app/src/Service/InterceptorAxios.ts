import axios from "axios";
import store from "../Redux/Store";

export const tokenAxios = axios.create();

tokenAxios.interceptors.request.use(request => {
    request.headers = {
        "authorization": store.getState().authReducer?.user?.token ?? ''
    };
    return request;
});