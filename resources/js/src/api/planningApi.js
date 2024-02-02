import axios from "axios";
import { getEnv } from "../helpers/getEnv";

const { VITE_APP_URL } = getEnv();

const planningApi = axios.create({
    baseURL: VITE_APP_URL
});

planningApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        "Accept": "application/json",

    }
    return config;
});

export default planningApi;
