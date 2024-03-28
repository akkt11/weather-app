import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { toast } from "react-toastify";
import {
  SelectedWeatherState,
  LocationState,
  FavoriteLocationState,
} from "./store.types";

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
        const newFavorite = [];

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
