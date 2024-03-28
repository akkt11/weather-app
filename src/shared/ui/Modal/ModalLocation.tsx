import {
  FormEvent,
  forwardRef,
  useEffect,
  useState,
} from "react";
import style from "./ModalLocation.module.scss";
import { Typography } from "../Typography/Typography";
import { SearchIcon } from "../../../icons/SearchIcon";
import { Button } from "../Button/Button";
import { useFavoriteLocation, useLocation } from "../../../store/store";
import clsx from "clsx";
import { useGetWeather } from "../../api/hooks";
import { MinusIcon } from "../../../icons/MinusIcon";

export const ModalLocation = forwardRef<HTMLMenuElement>((_, ref) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const {
    isFavorite,
    localFavoriteData,
    addFavorite,
    removeFavorite,
    checkFavorite,
  } = useFavoriteLocation((state) => ({
    isFavorite: state.isFavorite,
    localFavoriteData: state.localFavoriteData,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
    checkFavorite: state.checkFavorite,
  }));
  const { location, setLocation } = useLocation((state) => ({
    location: state.location,
    setLocation: state.setLocation,
  }));
  const { geocodeData, weatherData } = useGetWeather(location);

  useEffect(() => {
    if (!geocodeData) return setError("no results found");

    setError("");
    setSearch("");
    checkFavorite(geocodeData);
  }, [geocodeData, localFavoriteData]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (!search.trim().length) {
      return setError("write something");
    }

    setLocation(search);
  };

  return (
    <menu ref={ref} className={style.modal}>
      <form
        className={clsx(style.modalSearch, { [style.active]: search })}
        onSubmit={handleSearch}
      >
        <input
          value={search}
          type="text"
          placeholder="Search for location"
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </form>

      <div className={style.modalError}>
        <Typography variant="paragraph" format="capitalize">
          {error}
        </Typography>
      </div>

      <div className={style.modalFavorite}>
        <Typography
          variant="h6"
          className={style.modalTitle}
          format="uppercase"
        >
          favorites
        </Typography>

        <ul role="list" className={style.modalList}>
          <li
            className={clsx(style.modalAction, {
              [style.active]: !isFavorite,
            })}
            onClick={() => addFavorite(geocodeData, weatherData)}
          >
            <Typography variant="h6" format="capitalize" ellipsis={true}>
              click to save this location
            </Typography>

            <Typography variant="paragraph" ellipsis={true}>
              {weatherData?.fullLocation.filter((item) => item).join(", ")}
            </Typography>
          </li>

          {localFavoriteData.map((item, index) => {
            return (
              <li
                className={clsx(style.modalItem, {
                  [style.active]: location === item.main,
                })}
                key={index}
                onClick={() => setLocation(item.main)}
              >
                <div>
                  <Typography variant="h6" weight="bold" ellipsis={true}>
                    {item.main}
                  </Typography>

                  <Typography variant="paragraph" ellipsis={true}>
                    {item?.addition?.join(", ")}
                  </Typography>
                </div>

                <Button onClick={(e) => removeFavorite(e, item)}>
                  <MinusIcon />
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </menu>
  );
});
