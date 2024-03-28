import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { axiosApi } from "./axiosApi";
import { dateToDMY, dateToWeekDay } from "../helpers/convertDate";

export interface WeatherResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  };
  minutely: {
    dt: number;
    precipitation: number;
  }[];
  hourly: {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    pop: number;
  }[];
  daily: {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    summary: string;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    };
    feels_like: {
      day: number;
      night: number;
      eve: number;
      morn: number;
    };
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
  }[];
  alerts: {
    sender_name: string;
    event: string;
    start: number;
    end: number;
    description: string;
    tags: string[];
  }[];
}
export interface WeatherDaily {
  dt: number;
  fullDate: string[];
  temp: number;
  feel: number;
  wind_speed: number;
  condition: string;
  rain: number;
  uvi: number;
}
export interface WeatherHourly {
  dt: number;
  temp: number;
  condition: string;
  wind_speed: number;
}

export interface WeatherData {
  fullLocation: string[];
  daily: WeatherDaily[];
  hourly: WeatherHourly[];
}
export interface GeocodeData {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

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
