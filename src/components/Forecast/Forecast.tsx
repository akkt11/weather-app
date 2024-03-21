import { FC } from "react";
import { Typography } from "../../shared/ui/Typography/Typography";
import { Clock } from "../../icons/ClockIcon";
import { Button } from "../../shared/ui/Button/Button";
import { ForecastChart } from "../../shared/ui/Chart/ForecastChart";
import style from "./Forecast.module.scss";

export const Forecast: FC = () => {
  return (
    <div className={style.forecast}>
      <div className={style.forecastTime}>
        <Clock />
        <Typography variant="h6" weight="medium">
          24-hour forecast
        </Typography>
      </div>

      <div className={style.forecastChart}>
        <ForecastChart />
      </div>

      <Button type="primary" customClasses={style.forecastButton}>
        <Typography variant="h6">5-day forecast</Typography>
      </Button>
    </div>
  );
};
