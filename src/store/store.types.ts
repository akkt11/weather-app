import { MouseEvent } from "react";

import {
  GeocodeData,
  WeatherDaily,
  WeatherData,
} from "../shared/api/hooks.types";

export interface SelectedWeatherState {
  selectedWeather: WeatherDaily | null;
  setSelectedWeather: (selectedWeather?: WeatherDaily) => void;
}
export interface LocationState {
  location: string;
  setLocation: (city_name?: string) => void;
}

export interface LocalFavoriteState {
  main?: string;
  addition?: string[];
  latitude?: number;
  longitude?: number;
}

export interface FavoriteLocationState {
  isFavorite: boolean;
  localFavoriteData: LocalFavoriteState[];
  setLocalFavoriteData: (newFavorite: LocalFavoriteState[]) => void;
  addFavorite: (geocodeData?: GeocodeData, weatherData?: WeatherData) => void;
  removeFavorite: (
    e: MouseEvent<HTMLButtonElement>,
    favorite: LocalFavoriteState,
  ) => void;
  checkFavorite: (geocodeData?: GeocodeData) => void;
}
