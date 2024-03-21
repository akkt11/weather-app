import { FC } from "react";
import { Forecast } from "../Forecast/Forecast";
import { Condition } from "../Condition/Condition";
import style from "./Panel.module.scss";
import { Menu } from "../Menu/Menu";
import { SliderCondition } from "../../shared/ui/Slider/SliderCondition";

export const Panel: FC = () => {
  return (
    <section className={style.panel}>
      <div className={style.panelContainer}>
        <div className={style.panelSlider}>
          <SliderCondition />
        </div>

        <div className={style.panelMenu}>
          <Menu />
        </div>
        <div className={style.panelForecast}>
          <Forecast />
        </div>
        <div className={style.panelCondition}>
          <Condition />
        </div>
      </div>
    </section>
  );
};
