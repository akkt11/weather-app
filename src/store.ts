import { MouseEvent } from "react";
import {
  GeocodeData,
  WeatherDaily,
  WeatherData,
  WeatherHourly,
} from "./shared/api/hooks";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { toast } from "react-toastify";

interface SelectedWeatherState {
  selectedWeather: WeatherDaily | null;
  setSelectedWeather: (selectedWeather?: WeatherDaily) => void;
}
interface LocationState {
  location: string;
  setLocation: (city_name?: string) => void;
}

interface FavoriteLocationState {
  isFavorite: boolean;
  localFavoriteData: LocalFavoriteState[];
  setLocalFavoriteData: (newFavorite: LocalFavoriteState[]) => void;
  addFavorite: (geocodeData?: GeocodeData, weatherData?: WeatherData) => void;
  removeFavorite: (e: MouseEvent, favorite: LocalFavoriteState) => void;
  checkFavorite: (geocodeData?: GeocodeData) => void;
}
interface LocalFavoriteState {
  main?: string;
  addition?: string[];
  latitude?: number;
  longitude?: number;
}

export const useSelectedWeather = create<SelectedWeatherState>()(
  devtools((set) => ({
    selectedWeather: null,
    setSelectedWeather: (selectedWeather) =>
      set({ selectedWeather: selectedWeather }),
  }))
);

export const useLocation = create<LocationState>()(
  devtools((set) => ({
    location: "Bishkek",
    setLocation: (location) => set({ location: location }),
  }))
);

export const useFavoriteLocation = create<FavoriteLocationState>()(
  devtools((set, get) => ({
    isFavorite: false,
    localFavoriteData:
      JSON.parse(localStorage.getItem("favoriteLocation") as string) || [],
    setLocalFavoriteData: (newFavorite) => {
      localStorage.setItem("favoriteLocation", JSON.stringify(newFavorite));
      set({ localFavoriteData: newFavorite });
    },
    addFavorite: (geocodeData, weatherData) => {
      if (geocodeData && weatherData) {
        let newFavorite = [];

        newFavorite.push(...get().localFavoriteData, {
          main: weatherData.fullLocation[0],
          addition: weatherData.fullLocation.filter(
            (item, index) => item && index !== 0
          ),
          latitude: geocodeData.lat,
          longitude: geocodeData.lon,
        });

        get().setLocalFavoriteData(newFavorite);
      } else {
        toast.error("Failed to add to favorites");
      }
    },
    removeFavorite: (e, favorite) => {
      e.stopPropagation();

      const newFavorite = get().localFavoriteData.filter(
        (item) =>
          item.latitude !== favorite.latitude &&
          item.longitude !== favorite.longitude
      );

      get().setLocalFavoriteData(newFavorite);
    },
    checkFavorite: (geocodeData) => {
      if (geocodeData) {
        const isFavorite = get().localFavoriteData.some(
          (item) =>
            item.latitude === geocodeData.lat &&
            item.longitude === geocodeData.lon
        );

        set({ isFavorite: isFavorite });
      } else {
        toast.error("Failed to sync favorites");
      }
    },
  }))
);
