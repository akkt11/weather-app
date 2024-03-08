import React from "react";
import ReactDOM from "react-dom/client";
import { Weather } from "./components/weather/Weather.tsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);
