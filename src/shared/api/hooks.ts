import { useQuery } from "@tanstack/react-query";
import { axiosApi } from "./axiosApi";

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
  location: string;
  daily: WeatherDaily[];
  hourly: WeatherHourly[];
}

export const useGetGeocode = (city_name: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["geocode"],
    queryFn: async () => {
      const response = await axiosApi(
        `/geo/1.0/direct?q=${city_name}&appid=a87ba81565b17502bff3d61c4325fcd8`
      );

      return response.data[0];
    },
  });

  return { data, isLoading };
};

export const useGetWeather = (city_name: string) => {
  const { data: geocodeData } = useGetGeocode(city_name);

  const latitude = geocodeData?.lat;
  const longitude = geocodeData?.lon;

  const { data: weatherData, isLoading } = useQuery<WeatherData>({
    queryKey: ["weather", latitude, longitude],
    queryFn: async () => {
      const { data } = await axiosApi<WeatherResponse>(
        `/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=a87ba81565b17502bff3d61c4325fcd8`
      );

      const weather = {
        location: data.timezone,
        daily: data.daily.map((item) => ({
          dt: item.dt,
          temp: Math.floor(item.temp.day),
          feel: Math.floor(item.feels_like.day),
          wind_speed: item.wind_speed,
          condition: item.weather[0].main,
          rain: item.rain,
          uvi: item.uvi,
        })),
        hourly: data.hourly.slice(0, 24).map((item) => ({
          dt: item.dt,
          temp: Math.floor(item.temp),
          wind_speed: item.wind_speed,
          condition: item.weather[0].main,
        })),
      };

      return weather;
    },
    enabled: !!latitude && !!longitude,
  });

  return { weatherData, isLoading };
};
