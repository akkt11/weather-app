import { FC } from "react";
import { Overview } from "../Overview/Overview";
import { Panel } from "../Panel/Panel";
import { useGetWeather } from "../../shared/api/hooks";
import { Loader } from "../../shared/ui/Loader/Loader";
import { useCity, useSelectedWeather } from "../../store";

export const Home: FC = () => {
  const city = useCity((state) => state.city);
  const { status } = useGetWeather(city);

  if (status === "pending") {
    return <Loader />;
  }

  return (
    <>
      <Overview />
      <Panel />
    </>
  );
};
