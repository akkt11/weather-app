import {
  FC,
  FormEvent,
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
  useState,
} from "react";
import style from "./ModalCity.module.scss";
import { Typography } from "../Typography/Typography";
import { SearchIcon } from "../../../icons/SearchIcon";
import { Button } from "../Button/Button";
import { useCity } from "../../../store";
import clsx from "clsx";
import { useGetWeather } from "../../api/hooks";

export const ModalCity = forwardRef<HTMLMenuElement>((_, ref) => {
  const { city, setCity } = useCity((state) => ({
    city: state.city,
    setCity: state.setCity,
  }));
  const { geocodeData } = useGetWeather(city);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!geocodeData) {
      return setError("no results found");
    }
    return setError("");
  }, [geocodeData]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (!search.trim().length) {
      return setError("write something");
    }

    setCity(search);
  };

  return (
    <menu ref={ref} className={style.modal}>
      <form
        className={clsx(style.modalSearch, search ? style.active : "")}
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

      <ul role="list" className={style.modalList}>
        <Typography
          variant="h6"
          className={style.modalTitle}
          format="uppercase"
        >
          favorites
        </Typography>
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <li className={style.modalItem} key={index}>
              <Typography
                variant="h6"
                weight="bold"
                className={style.modalText}
              >
                Uchkun
              </Typography>
              <Typography variant="paragraph" className={style.modalText}>
                Uchkun, Bishkek, Kyrgyzstan Uchkun, Bishkek, Kyrgyzstan Uchkun,
                Bishkek, Kyrgyzstan
              </Typography>
            </li>
          );
        })}
      </ul>
    </menu>
  );
});
