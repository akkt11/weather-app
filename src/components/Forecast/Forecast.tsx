import { FC } from "react";
import { Typography } from "../../shared/ui/Typography/Typography";
import { ClockIcon } from "../../icons/ClockIcon";
import { Button } from "../../shared/ui/Button/Button";
import { ForecastChart } from "../../shared/ui/Chart/ForecastChart";
import style from "./Forecast.module.scss";

export const Forecast: FC = () => {
  return (
    <div className={style.forecast}>
      <div className={style.forecastTime}>
        <ClockIcon />
        <Typography variant="h6" weight="medium">
          24-hour forecast
        </Typography>
      </div>

      <div className={style.forecastChart}>
        <ForecastChart />
      </div>

      <Button variant="primary" className={style.forecastButton}>
        <Typography variant="h6">5-day forecast</Typography>
      </Button>
    </div>
  );
};
