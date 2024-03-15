import { FC } from "react";
import { Typography } from "../../shared/ui/Typography/Typography";
import { Feel } from "../../icons/Feel";
import { Wind } from "../../icons/Wind";
import { Drop } from "../../icons/Drop";
import { Sun } from "../../icons/Sun";
import { SliderCondition } from "./slider/SliderCondition";
import style from "./Condition.module.scss";
import { useWeather } from "../../store";
import { capitalize, uppercase } from "../../shared/helper/stringFormat";

export const Condition: FC = () => {
  const weather = useWeather((state) => state.weather);

  return (
    <div className={style.condition}>
      <div className={style.day}>
        <div className={style.daySlider}>
          <SliderCondition />
        </div>
        <div className={style.dayTime}>
          <Typography variant="h5" weight="medium">
            8:00PM GMT
          </Typography>
        </div>
      </div>

      <div className={style.air}>
        <Typography variant="h6" weight="bold">
          {uppercase("air conditions")}
        </Typography>

        <div className={style.airInfo}>
          <Feel />

          <div className={style.airDescription}>
            <Typography variant="paragraph" weight="medium">
              {capitalize("real feel")}
            </Typography>
            <Typography variant="h5" weight="medium">
              {weather?.feels_like.day}
            </Typography>
          </div>
        </div>

        <div className={style.airInfo}>
          <Wind />

          <div className={style.airDescription}>
            <Typography variant="paragraph" weight="medium">
              {capitalize("wind")}
            </Typography>
            <Typography variant="h5" weight="medium">
              {`${weather?.wind_speed} km/hr`}
            </Typography>
          </div>
        </div>

        <div className={style.airInfo}>
          <Drop />

          <div className={style.airDescription}>
            <Typography variant="paragraph" weight="medium">
              {capitalize("chance of rain")}
            </Typography>
            <Typography variant="h5" weight="medium">
              {`${weather?.rain} %`}
            </Typography>
          </div>
        </div>

        <div className={style.airInfo}>
          <Sun />

          <div className={style.airDescription}>
            <Typography variant="paragraph" weight="medium">
              {capitalize("UV index")}
            </Typography>
            <Typography variant="h5" weight="medium">
              {weather?.uvi}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
