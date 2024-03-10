import { FC } from "react";
import { Overview } from "../Overview/Overview";
import { Panel } from "../Panel/Panel";

export const Home: FC = () => {
  return (
    <>
      <Overview />
      <Panel />
    </>
  );
};
