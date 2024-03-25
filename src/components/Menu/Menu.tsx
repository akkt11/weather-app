import { FC } from "react";
import style from "./Menu.module.scss";
import { Typography } from "../../shared/ui/Typography/Typography";
import { LocationIcon } from "../../icons/LocationIcon";
import { SettingIcon } from "../../icons/SettingIcon";
import { Button } from "../../shared/ui/Button/Button";

export const Menu: FC = () => {
  return (
    <div className={style.menu}>
      <div className={style.menuList}>
        <ul role="list">
          <li>
            <img
              src="https://cdnn11.img.sputnik.by/img/104429/09/1044290984_433:0:2481:2048_1920x0_80_0_0_d1ec1f648af8425ae6f73734c93b85e2.jpg"
              alt="Ava"
            />
          </li>
          <li>
            <Button className={style.menuButton}>
              <LocationIcon />
              <Typography variant="h6">cities</Typography>
            </Button>
          </li>
          <li>
            <Button className={style.menuButton}>
              <SettingIcon />
              <Typography variant="h6">settings</Typography>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
