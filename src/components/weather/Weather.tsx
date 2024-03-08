import style from "./Weather.module.scss";

export const Weather = () => {
  return (
    <section className={style.weather}>
      <div className={style.weatherContainer}>
        <h1>Weather</h1>
      </div>
    </section>
  );
};
