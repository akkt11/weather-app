import { FC } from "react";
import { CloudSun } from "../../icons/CloudSun";
import { Typography } from "../../shared/Typography/Typography";
import { Location } from "../../icons/Location";
import { Chevron } from "../../icons/Chevron/Chevron";
import { Button } from "../../shared/Button/Button";
import style from "./Overview.module.scss";

export const Overview: FC = () => {
  return (
    <section className={style.overview}>
      <div className={style.overviewContainer}>
        <div className={style.overviewInfo}>
          <div className={style.info}>
            <div className={style.infoMain}>
              <div className={style.infoCity}>
                <div className={style.city}>
                  <Location />

                  <Typography
                    variant="h3"
                    weight="medium"
                    className={style.cityTitle}
                  >
                    Bishkek
                  </Typography>

                  <Button type="icon">
                    <Chevron type="right" />
                  </Button>
                </div>

                <img
                  src="https://cdnn11.img.sputnik.by/img/104429/09/1044290984_433:0:2481:2048_1920x0_80_0_0_d1ec1f648af8425ae6f73734c93b85e2.jpg"
                  alt="Ava"
                />
              </div>

              <Typography
                variant="h2"
                weight="medium"
                className={style.infoTitle}
              >
                Cloudy
              </Typography>
            </div>

            <div className={style.infoImage}>
              <CloudSun />
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
        <div className={style.overviewImage}>
          <CloudSun />
        </div>
      </div>
    </section>
  );
};
