import { useQuery } from "@tanstack/react-query";
import { axiosApi } from "./axiosApi";

export interface WeatherItem {
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
}

export interface WeatherData {
  location: string;
  daily: WeatherItem[];
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

  const { data, isLoading } = useQuery<WeatherData>({
    queryKey: ["weather", latitude, longitude],
    queryFn: async () => {
      const { data } = await axiosApi(
        `/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=a87ba81565b17502bff3d61c4325fcd8`
      );

      const weather = {
        location: data.timezone,
        daily: data.daily,
      };

      return weather;
    },
    enabled: !!latitude && !!longitude,
  });

  return { data, isLoading };
};
