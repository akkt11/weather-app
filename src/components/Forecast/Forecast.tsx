import { FC } from "react";
import style from "./Forecast.module.scss";
import { Typography } from "../../shared/Typography/Typography";

export const Forecast: FC = () => {
  return (
    <div className={style.forecast}>
      <Typography variant="h6">24-hour forecast</Typography>

      <div className={style.forecastChart}></div>
    </div>
  );
};
