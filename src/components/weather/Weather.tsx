import { FC } from "react";
import { CloudSun } from "../../icons/CloudSun";
import { Typography } from "../shared/Typography/Typography";
import { Location } from "../../icons/Location";
import { Chevron } from "../../icons/Chevron/Chevron";
import { Button } from "../shared/Button/Button";
import style from "./Weather.module.scss";

export const Weather: FC = () => {
  return (
    <section className={style.weather}>
      <div className={style.weatherContainer}>
        <div className={style.weatherInfo}>
          <div className={style.info}>
            <div className={style.infoMain}>
              <div className={style.infoCity}>
                <Location />

                <Typography variant="h3" weight="medium">
                  Bishkek
                </Typography>

                <Button type="icon">
                  <Chevron type="right" />
                </Button>
              </div>
              <div className={style.infoTitle}>
                <Typography variant="h2" weight="medium">
                  Cloudy
                </Typography>
              </div>
            </div>

            <div className={style.infoDescription}>
              <div>
                <Typography variant="h1" weight="medium">
                  26°C
                </Typography>
              </div>
              <div>
                <Typography variant="h4">Sunday | 12 Dec 2023</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={style.weatherImage}>
          <CloudSun />
        </div>
      </div>
    </section>
  );
};
