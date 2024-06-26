import { FC } from "react";

import { ClockIcon } from "../../icons/ClockIcon";
import { ConditionIcon } from "../../icons/ConditionIcon";
import { MountainIcon } from "../../icons/MountainIcon";
import { SliderCondition } from "../../shared/ui/Slider/SliderCondition";
import { Typography } from "../../shared/ui/Typography/Typography";
import { useSelectedWeather } from "../../store/store";
import style from "./Condition.module.scss";

export const Condition: FC = () => {
  const selectedWeather = useSelectedWeather(state => state.selectedWeather);
  return (
    <div className={style.condition}>
      <div className={style.conditionImage}>
        <MountainIcon />
      </div>
      <div className={style.day}>
        <div className={style.daySlider}>
          <SliderCondition />
        </div>
        <Typography variant="h5" weight="medium" className={style.dayTime}>
          <ClockIcon />
          {new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </Typography>
      </div>

      <div className={style.air}>
        <Typography
          variant="h6"
          weight="bold"
          format="uppercase"
          className={style.airTitle}
        >
          air conditions
        </Typography>

        <div className={style.airElement}>
          <div className={style.airInfo}>
            <ConditionIcon type="feel" />

            <div className={style.airDescription}>
              <Typography
                variant="paragraph"
                weight="medium"
                format="capitalize"
              >
                real feel
              </Typography>

              <Typography variant="h5" weight="medium" symbol="temp">
                {selectedWeather?.feel}
              </Typography>
            </div>
          </div>

          <div className={style.airInfo}>
            <ConditionIcon type="wind" />

            <div className={style.airDescription}>
              <Typography
                variant="paragraph"
                weight="medium"
                format="capitalize"
              >
                wind
              </Typography>

              <Typography variant="h5" weight="medium" symbol="km">
                {selectedWeather?.wind_speed}
              </Typography>
            </div>
          </div>

          <div className={style.airInfo}>
            <ConditionIcon type="drop" />

            <div className={style.airDescription}>
              <Typography
                variant="paragraph"
                weight="medium"
                format="capitalize"
              >
                chance of rain
              </Typography>

              <Typography variant="h5" weight="medium" symbol="pct">
                {selectedWeather?.rain}
              </Typography>
            </div>
          </div>

          <div className={style.airInfo}>
            <ConditionIcon type="uv" />

            <div className={style.airDescription}>
              <Typography variant="paragraph" weight="medium">
                UV index
              </Typography>
              <Typography variant="h5" weight="medium">
                {selectedWeather?.uvi}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
