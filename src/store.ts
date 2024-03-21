import { WeatherDaily, WeatherHourly } from "./shared/api/hooks";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface WeatherState {
  current: WeatherDaily | null;
  location: string;

  setSelectedWeather: (current?: WeatherDaily, location?: string) => void;
}

export const useSelectedWeather = create<WeatherState>()((set) => ({
  location: "",
  current: null,
  setSelectedWeather: (current, location) =>
    set({ current: current, location: location }),
}));
