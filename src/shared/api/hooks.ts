import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { axiosApi } from "./axiosApi";
import { dateToDMY, dateToWeekDay } from "../helpers/convertDate";
import { GeocodeData, WeatherData, WeatherResponse } from "./hooks.types";

export const useGetGeocode = (city_name: string) => {
  const { data } = useQuery<GeocodeData>({
    queryKey: ["geocode", city_name],
    queryFn: async () => {
      const response = await axiosApi.get("/geo/1.0/direct", {
        params: {
          q: city_name,
          appid: process.env.VITE_API_KEY,
        },
      });

      return response.data[0] ?? null;
    },
    placeholderData: keepPreviousData,
    meta: {
      errorMessage: "Failed to fetch geocode data",
    },
  });

  return { data };
};

export const useGetWeather = (city_name: string) => {
  const { data: geocodeData } = useGetGeocode(city_name);

  const latitude = geocodeData?.lat;
  const longitude = geocodeData?.lon;

  const {
    data: weatherData,
    isPending,
    isError,
  } = useQuery<WeatherData>({
    queryKey: ["weather", latitude, longitude],
    queryFn: async () => {
      const { data } = await axiosApi.get<WeatherResponse>(
        "/data/3.0/onecall",
        {
          params: {
            lat: latitude,
            lon: longitude,
            exclude: "minutely",
            units: "metric",
            appid: process.env.VITE_API_KEY,
          },
        }
      );

      const weather = {
        fullLocation: [
          geocodeData?.name ?? "",
          geocodeData?.state ?? "",
          geocodeData?.country ?? "",
        ],
        daily: data.daily.map((item) => ({
          dt: item.dt,
          fullDate: [dateToWeekDay(item.dt), dateToDMY(item.dt)],
          temp: Math.floor(item.temp.day) ?? 0,
          feel: Math.floor(item.feels_like.day) ?? 0,
          wind_speed: item.wind_speed ?? 0,
          condition: item.weather[0].main,
          rain: item.rain ?? 0,
          uvi: item.uvi ?? 0,
        })),
        hourly: data.hourly.slice(0, 24).map((item) => ({
          dt: item.dt,
          temp: Math.floor(item.temp) ?? 0,
          wind_speed: item.wind_speed ?? 0,
          condition: item.weather[0].main ?? 0,
        })),
      };

      return weather ?? null;
    },
    enabled: !!latitude && !!longitude,
    placeholderData: keepPreviousData,
    meta: {
      errorMessage: "Failed to fetch weather data",
    },
  });

  return {
    weatherData,
    geocodeData,
    isPending,
    isError,
  };
};
