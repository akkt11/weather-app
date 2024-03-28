import { FC } from "react";
import { Typography } from "../../shared/ui/Typography/Typography";
import { ChevronIcon } from "../../icons/ChevronIcon";
import { Button } from "../../shared/ui/Button/Button";
import { useLocation, useSelectedWeather } from "../../store/store";
import { WeatherIcon } from "../../icons/WeatherIcon";
import style from "./Overview.module.scss";
import { ModalLocation } from "../../shared/ui/Modal/ModalLocation";
import { useDetectClickOut } from "../../shared/helpers/useDetectClickOut";
import { useGetWeather } from "../../shared/api/hooks";
import { MenuIcon } from "../../icons/MenuIcon";

export const Overview: FC = () => {
  const selectedWeather = useSelectedWeather((state) => state.selectedWeather);
  const location = useLocation((state) => state.location);
  const { weatherData } = useGetWeather(location);
  const { show, nodeRef, triggerRef } = useDetectClickOut(false);

  return (
    <section className={style.overview}>
      <div className={style.overviewContainer}>
        <div className={style.overviewInfo}>
          <div className={style.infoWrapper}>
            <div className={style.action}>
              <div className={style.actionLocation}>
                <div className={style.actionModal}>
                  {show ? <ModalLocation ref={nodeRef} /> : null}
                </div>

                <MenuIcon type="location" />

                <Button ref={triggerRef} className={style.actionButton}>
                  <Typography variant="link" weight="medium" ellipsis={true}>
                    {weatherData?.fullLocation
                      .filter((item) => item)
                      .join(", ")}
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
                {selectedWeather?.condition}
              </Typography>

              <div className={style.mainImage}>
                <WeatherIcon
                  condition={selectedWeather?.condition}
                  width="321px"
                  height="254px"
                />
              </div>

              <Typography variant="h1" weight="medium" symbol="c">
                {selectedWeather?.temp}
              </Typography>

              <div className={style.mainDate}>
                <Typography variant="h4" className={style.dateText}>
                  {selectedWeather?.fullDate.filter((item) => item).join(" | ")}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={style.overviewImage}>
          <WeatherIcon
            condition={selectedWeather?.condition}
            width="321px"
            height="254px"
          />
        </div>
      </div>
    </section>
  );
};
