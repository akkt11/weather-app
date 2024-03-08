import { Typography } from "../Typography/Typography";
import style from "./Weather.module.scss";

export const Weather = () => {
  return (
    <section className={style.weather}>
      <div className={style.weatherContainer}>
        <Typography variant="h1">26°C</Typography>
      </div>
    </section>
  );
};
