import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL = process.env.NEXT_BACKEND_BASE_URL;

const apiClient: AxiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        try {
            const token = await getAuthToken();
            if (token) {
                config.headers = {
                    ...config.headers,
                    Authorization: `Bearer ${token}`,
                };
            }
        } catch (error) {
            console.error("Failed to fetch auth token:", error);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

const getAuthToken = async () => {
    const token = localStorage.getItem("accessToken");
    return token;
};

export default apiClient;
