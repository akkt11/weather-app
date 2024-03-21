import { LabelList, Line, LineChart } from "recharts";
import { Typography } from "../Typography/Typography";
import style from "./ForecastChart.module.scss";
import { dateToHour, dateToNow } from "../../helper/convertDate";
import { WeatherIcon } from "../../../icons/WeatherIcon";
import { WeatherHourly, useGetWeather } from "../../api/hooks";
import clsx from "clsx";

export const ForecastChart = () => {
  const { weatherData } = useGetWeather("Bishkek");

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
          className={clsx(style.degree, isCurrentHour ? style.currentHour : "")}
        >
          <Typography variant="h6">{`${temp}°`}</Typography>

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
