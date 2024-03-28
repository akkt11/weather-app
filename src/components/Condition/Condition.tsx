import { FC } from "react";
import { Typography } from "../../shared/ui/Typography/Typography";
import { SliderCondition } from "../../shared/ui/Slider/SliderCondition";
import { useSelectedWeather } from "../../store";
import { ConditionIcon } from "../../icons/ConditionIcon";
import style from "./Condition.module.scss";

export const Condition: FC = () => {
  const selectedWeather = useSelectedWeather((state) => state.selectedWeather);

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
        <Typography variant="h6" weight="bold" format="uppercase">
          air conditions
        </Typography>

        <div className={style.airInfo}>
          <ConditionIcon type="feel" />

          <div className={style.airDescription}>
            <Typography variant="paragraph" weight="medium" format="capitalize">
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
            <Typography variant="paragraph" weight="medium" format="capitalize">
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
            <Typography variant="paragraph" weight="medium" format="capitalize">
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
  );
};
