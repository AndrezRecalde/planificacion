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
