import clsx from "clsx";
import { LabelList, Line, LineChart } from "recharts";

import { WeatherIcon } from "../../../icons/WeatherIcon";
import { useLocation } from "../../../store/store";
import { useGetWeather } from "../../api/hooks";
import { dateToHour, dateToNow } from "../../helpers/convertDate";
import { Typography } from "../Typography/Typography";
import style from "./ForecastChart.module.scss";

export const ForecastChart = () => {
  const location = useLocation(state => state.location);
  const { weatherData } = useGetWeather(location);

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const customizedLabel = (props: any) => {
    const { x, y, index } = props;
    const { dt, temp, condition, wind_speed } =
      weatherData?.hourly[index] || {};
    const isCurrentHour = dateToNow(dt);

    return (
      <foreignObject
        height={1}
        width={20}
        x={x}
        y={y - 25}
        className={style.labelWrapper}
      >
        <div
          className={clsx(style.degree, { [style.currentHour]: isCurrentHour })}
        >
          <Typography variant="h6" symbol="temp">
            {temp}
          </Typography>

          <div className={style.degreeDetails}>
            <WeatherIcon condition={condition} />
            <Typography variant="caption" symbol="km">
              {wind_speed}
            </Typography>
            <Typography variant="caption">
              {isCurrentHour ? isCurrentHour : dateToHour(dt)}
            </Typography>
          </div>
        </div>
      </foreignObject>
    );
  };

  return (
    <LineChart
      margin={{ top: 60 }}
      width={2300}
      height={350}
      data={weatherData?.hourly}
      style={{ position: "absolute" }}
    >
      <Line
        type="monotone"
        dataKey="temp"
        stroke="#FFC355"
        dot={false}
        strokeWidth={2}
      >
        <LabelList content={customizedLabel} />
      </Line>
    </LineChart>
  );
};
