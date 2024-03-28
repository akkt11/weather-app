import { LabelList, Line, LineChart } from "recharts";
import { Typography } from "../Typography/Typography";
import style from "./ForecastChart.module.scss";
import { dateToHour, dateToNow } from "../../helpers/convertDate";
import { WeatherIcon } from "../../../icons/WeatherIcon";
import { WeatherHourly, useGetWeather } from "../../api/hooks";
import clsx from "clsx";
import { useLocation } from "../../../store";

export const ForecastChart = () => {
  const location = useLocation((state) => state.location);
  const { weatherData } = useGetWeather(location);

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
            <Typography variant="caption">{`${wind_speed}km/h`}</Typography>
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
