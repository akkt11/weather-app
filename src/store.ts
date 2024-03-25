import { WeatherDaily, WeatherData, WeatherHourly } from "./shared/api/hooks";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SelectedWeatherState {
  location: string;
  current: WeatherDaily | null;
  setSelectedWeather: (location?: string, current?: WeatherDaily) => void;
}
interface SearchCityState {
  city: string;
  setCity: (city_name?: string) => void;
}

export const useSelectedWeather = create<SelectedWeatherState>()(
  devtools((set) => ({
    location: "",
    current: null,
    setSelectedWeather: (location, current) =>
      set({ location: location, current: current }),
  }))
);

export const useCity = create<SearchCityState>()(
  devtools((set) => ({
    city: "Bishkek",
    setCity: (city_name) => set({ city: city_name }),
  }))
);
