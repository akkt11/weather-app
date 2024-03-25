import { FC, useState } from "react";
import { Typography } from "../../shared/ui/Typography/Typography";
import { LocationIcon } from "../../icons/LocationIcon";
import { ChevronIcon } from "../../icons/ChevronIcon";
import { Button } from "../../shared/ui/Button/Button";
import { useSelectedWeather } from "../../store";
import { dateToDMY, dateToWeekDay } from "../../shared/helpers/convertDate";
import { WeatherIcon } from "../../icons/WeatherIcon";
import style from "./Overview.module.scss";
import { ModalCity } from "../../shared/ui/Modal/ModalCity";
import { useDetectClickOut } from "../../shared/helpers/useDetectClickOut";

export const Overview: FC = () => {
  const { current, location } = useSelectedWeather((state) => ({
    current: state.current,
    location: state.location,
  }));
  const { show, nodeRef, triggerRef } = useDetectClickOut(false);

  return (
    <section className={style.overview}>
      <div className={style.overviewContainer}>
        <div className={style.overviewInfo}>
          <div className={style.infoWrapper}>
            <div className={style.action}>
              <div className={style.actionCity}>
                <div className={style.overviewModal}>
                  {show ? <ModalCity ref={nodeRef} /> : null}
                </div>

                <LocationIcon />

                <Button ref={triggerRef} className={style.actionButton}>
                  <Typography variant="link" weight="medium">
                    {location}
                  </Typography>

                  <ChevronIcon />
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
                <Typography variant="h1" weight="medium" symbol="c">
                  {current?.temp}
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
