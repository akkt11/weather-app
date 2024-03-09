import { FC } from "react";
import { Typography } from "../../shared/Typography/Typography";
import { Feel } from "../../icons/Feel";
import { Wind } from "../../icons/Wind";
import { Drop } from "../../icons/Drop";
import { Sun } from "../../icons/Sun";
import { SliderCondition } from "../../shared/Slider/SliderCondition";
import style from "./Condition.module.scss";

export const Condition: FC = () => {
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
          air conditions
        </Typography>

        <div className={style.airInfo}>
          <Feel />

          <div className={style.airDescription}>
            <Typography variant="paragraph" weight="medium">
              real feel
            </Typography>
            <Typography variant="h5" weight="medium">
              30°
            </Typography>
          </div>
        </div>

        <div className={style.airInfo}>
          <Wind />

          <div className={style.airDescription}>
            <Typography variant="paragraph" weight="medium">
              wind
            </Typography>
            <Typography variant="h5" weight="medium">
              0.8 km/hr
            </Typography>
          </div>
        </div>

        <div className={style.airInfo}>
          <Drop />

          <div className={style.airDescription}>
            <Typography variant="paragraph" weight="medium">
              chance of rain
            </Typography>
            <Typography variant="h5" weight="medium">
              2%
            </Typography>
          </div>
        </div>

        <div className={style.airInfo}>
          <Sun />

          <div className={style.airDescription}>
            <Typography variant="paragraph" weight="medium">
              UV index
            </Typography>
            <Typography variant="h5" weight="medium">
              4
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
