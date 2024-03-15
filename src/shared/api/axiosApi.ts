import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://api.openweathermap.org",
});

axiosApi.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export { axiosApi };
