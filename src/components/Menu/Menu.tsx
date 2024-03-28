import { FC } from "react";
import style from "./Menu.module.scss";
import { Typography } from "../../shared/ui/Typography/Typography";
import { Button } from "../../shared/ui/Button/Button";
import { MenuIcon } from "../../icons/MenuIcon";

export const Menu: FC = () => {
  return (
    <div className={style.menu}>
      <div>
        <img
          src="https://cdnn11.img.sputnik.by/img/104429/09/1044290984_433:0:2481:2048_1920x0_80_0_0_d1ec1f648af8425ae6f73734c93b85e2.jpg"
          alt="Ava"
        />
      </div>

      <ul role="list">
        <li>
          <Button className={style.menuButton}>
            <MenuIcon type="weather" />
            <Typography variant="h6">weather</Typography>
          </Button>
        </li>
        <li>
          <Button className={style.menuButton}>
            <MenuIcon type="explore" />
            <Typography variant="h6">explore</Typography>
          </Button>
        </li>
        <li>
          <Button className={style.menuButton}>
            <MenuIcon type="location" />
            <Typography variant="h6">cities</Typography>
          </Button>
        </li>
        <li>
          <Button className={style.menuButton}>
            <MenuIcon type="setting" />
            <Typography variant="h6">settings</Typography>
          </Button>
        </li>
      </ul>
    </div>
  );
};
