import { FC } from "react";

import { MenuIcon } from "../../icons/MenuIcon";
import { Button } from "../../shared/ui/Button/Button";
import { Typography } from "../../shared/ui/Typography/Typography";
import style from "./Menu.module.scss";

export const Menu: FC = () => {
  return (
    <div className={style.menu}>
      <div>
        <img
          src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
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
