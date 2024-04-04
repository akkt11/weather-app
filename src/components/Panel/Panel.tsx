import { FC } from "react";

import { SliderCondition } from "../../shared/ui/Slider/SliderCondition";
import { Condition } from "../Condition/Condition";
import { Forecast } from "../Forecast/Forecast";
import { Menu } from "../Menu/Menu";
import style from "./Panel.module.scss";

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
