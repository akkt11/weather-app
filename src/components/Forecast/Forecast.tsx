import { FC } from "react";
import { Typography } from "../../shared/Typography/Typography";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "chart.js/auto";
import style from "./Forecast.module.scss";
import { Clock } from "../../icons/Clock";
import type { ChartData, ChartOptions } from "chart.js";
Chart.register(ChartDataLabels);

export const Forecast: FC = () => {
  const forecast = [
    { hour: 1, degree: 10 },
    { hour: 2, degree: 20 },
    { hour: 3, degree: 15 },
    { hour: 4, degree: 25 },
    { hour: 5, degree: 22 },
    { hour: 6, degree: 30 },
    { hour: 8, degree: 50 },
    { hour: 9, degree: 50 },
    { hour: 10, degree: 25 },
    { hour: 11, degree: 11 },
    { hour: 12, degree: 32 },
    { hour: 13, degree: 50 },
    { hour: 14, degree: 1 },
    { hour: 15, degree: 22 },
    { hour: 16, degree: 45 },
    { hour: 17, degree: 2 },
    { hour: 18, degree: 5 },
    { hour: 19, degree: 6 },
    { hour: 20, degree: 34 },
    { hour: 21, degree: 23 },
    { hour: 22, degree: 1 },
    { hour: 23, degree: 0 },
    { hour: 24, degree: 12 },
  ];

  const hours = forecast.map((item) => item.hour);
  const degrees = forecast.map((item) => item.degree);

  const options: ChartOptions<"line"> = {
    responsive: true,
    elements: {
      line: {
        tension: 0.4,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: "#fff",
        font: {
          size: 14,
        },
        align: "top",
        formatter: (value: number) => {
          return `${value}°`;
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  const data: ChartData<"line"> = {
    labels: hours,
    datasets: [
      {
        data: degrees,
        borderColor: "#FFC355",
        backgroundColor: "#FFC355",
        pointStyle: false,
      },
    ],
  };
  return (
    <div className={style.forecast}>
      <div className={style.forecastTime}>
        <Clock />
        <Typography variant="h6" weight="medium">
          24-hour forecast
        </Typography>
      </div>

      <div className={style.forecastChart}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
