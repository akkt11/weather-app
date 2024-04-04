import axios from "axios";

const weatherApi = axios.create({
  baseURL: process.env.VITE_WEATHER_API_URL,
});

weatherApi.interceptors.request.use(
  async config => {
    return config;
  },
  error => Promise.reject(error),
);

const geolocationApi = axios.create({
  baseURL: process.env.VITE_GEOLOCATION_API_URL,
});

geolocationApi.interceptors.request.use(
  async config => {
    return config;
  },
  error => Promise.reject(error),
);

export { geolocationApi, weatherApi };
