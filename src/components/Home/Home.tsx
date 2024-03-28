import { FC, useEffect } from "react";
import { Overview } from "../Overview/Overview";
import { Panel } from "../Panel/Panel";
import { useGetWeather } from "../../shared/api/hooks";
import { Loader } from "../../shared/ui/Loader/Loader";
import { useLocation, useSelectedWeather } from "../../store";

export const Home: FC = () => {
  const location = useLocation((state) => state.location);
  const { isPending, isError } = useGetWeather(location);

  if (isPending || isError) {
    return <Loader />;
  }

  return (
    <>
      <Overview />
      <Panel />
    </>
  );
};
