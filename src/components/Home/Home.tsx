import { FC } from "react";
import { Weather } from "../Weather/Weather";
import { Forecast } from "../Forecast/Forecast";

export const Home: FC = () => {
  return (
    <>
      <Weather />
      <Forecast />
    </>
  );
};
