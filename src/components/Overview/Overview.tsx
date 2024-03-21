import { FC } from "react";
import { Typography } from "../../shared/ui/Typography/Typography";
import { Location } from "../../icons/LocationIcon";
import { Chevron } from "../../icons/ChevronIcon";
import { Button } from "../../shared/ui/Button/Button";
import { useSelectedWeather } from "../../store";
import { dateToDMY, dateToWeekDay } from "../../shared/helper/convertDate";
import style from "./Overview.module.scss";
import { WeatherIcon } from "../../icons/WeatherIcon";

export const Overview: FC = () => {
  const { current, location } = useSelectedWeather((state) => ({
    current: state.current,
    location: state.location,
  }));

  return (
    <section className={style.overview}>
      <div className={style.overviewContainer}>
        <div className={style.overviewInfo}>
          <div className={style.infoWrapper}>
            <div className={style.action}>
              <div className={style.actionCity}>
                <Location />

                <Typography variant="h3" weight="medium">
                  {location}
                </Typography>

                <Button type="icon" customClasses={style.actionChevron}>
                  <Chevron />
                </Button>
              </div>

              <div className={style.actionImage}>
                <img
                  src="https://cdnn11.img.sputnik.by/img/104429/09/1044290984_433:0:2481:2048_1920x0_80_0_0_d1ec1f648af8425ae6f73734c93b85e2.jpg"
                  alt="Ava"
                />
              </div>
            </div>

            <div className={style.main}>
              <Typography
                variant="h2"
                weight="medium"
                className={style.mainTitle}
              >
                {current?.condition}
              </Typography>

              <div className={style.mainImage}>
                <WeatherIcon
                  condition={current?.condition}
                  width="321px"
                  height="254px"
                />
              </div>

              <div className={style.mainDescription}>
                <Typography variant="h1" weight="medium">
                  {`${current?.temp}°C`}
                </Typography>
                <Typography variant="h4">
                  {`${dateToWeekDay(current?.dt)} | ${dateToDMY(current?.dt)}`}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={style.overviewImage}>
          <WeatherIcon
            condition={current?.condition}
            width="321px"
            height="254px"
          />
        </div>
      </div>
    </section>
  );
};
