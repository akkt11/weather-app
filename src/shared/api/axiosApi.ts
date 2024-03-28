import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.VITE_API_URL,
});

axiosApi.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export { axiosApi };
