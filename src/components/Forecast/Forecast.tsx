import { FC } from "react";
import { Typography } from "../../shared/ui/Typography/Typography";
import { Clock } from "../../icons/Clock";
import style from "./Forecast.module.scss";
import { Line, LineChart } from "recharts";
import { Button } from "../../shared/ui/Button/Button";

export const Forecast: FC = () => {
  const data = Array.from({ length: 24 }).map((_, index) => ({
    hour: index,
    degree: Math.floor(Math.random() * 30),
  }));

  return (
    <div className={style.forecast}>
      <div className={style.forecastTime}>
        <Clock />
        <Typography variant="h6" weight="medium">
          24-hour forecast
        </Typography>
      </div>

      <div className={style.forecastChart}>
        <LineChart
          width={2400}
          height={100}
          data={data}
          style={{ position: "absolute" }}
        >
          <Line type="monotone" dataKey="degree" stroke="#FFC355" />
        </LineChart>
      </div>

      <Button type="primary" customClasses={style.forecastButton}>
        <Typography variant="h6">5-day forecast</Typography>
      </Button>
    </div>
  );
};
