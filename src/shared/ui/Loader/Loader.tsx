import { FC } from "react";
import style from "./Loader.module.scss";

export const Loader: FC = () => {
  return (
    <div className={style.loaderWrapper}>
      <span className={style.loader}></span>
    </div>
  );
};
