import { FC } from "react";
import { Typography } from "../../shared/ui/Typography/Typography";
import { Feel } from "../../icons/FeelIcon";
import { Wind } from "../../icons/WindIcon";
import { Drop } from "../../icons/DropIcon";
import { SliderCondition } from "../../shared/ui/Slider/SliderCondition";
import style from "./Condition.module.scss";
import { useSelectedWeather } from "../../store";
import { capitalize, uppercase } from "../../shared/helper/stringFormat";

export const Condition: FC = () => {
  const current = useSelectedWeather((state) => state.current);

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
              {`${current?.feel}°`}
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
              {`${current?.wind_speed} km/hr`}
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
              {`${current?.rain} %`}
            </Typography>
          </div>
        </div>

        <div className={style.airInfo}>
          <div className={style.airDescription}>
            <Typography variant="paragraph" weight="medium">
              {capitalize("UV index")}
            </Typography>
            <Typography variant="h5" weight="medium">
              {current?.uvi}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
