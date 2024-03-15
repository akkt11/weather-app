import { FC, useEffect, useState } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Sun } from "../../../icons/Sun";
import { Typography } from "../../../shared/ui/Typography/Typography";
import { WeatherItem, useGetWeather } from "../../../shared/api/hooks";
import { dateToWeekDay } from "../../../shared/helper/convertDate";
import { useWeather } from "../../../store";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-coverflow";
import { Swiper as SwiperInstance } from "swiper/types";
import style from "./SliderCondition.module.scss";

export const SliderCondition: FC = () => {
  const { data: weatherData, isLoading } = useGetWeather("Bishkek");
  const setWeather = useWeather((state) => state.setWeather);

  const getDayWeather = (swiper: SwiperInstance) => {
    if (swiper.slides.length > 0) {
      const currentSlide = swiper.slides[swiper.activeIndex];
      const dt = currentSlide.getAttribute("data-dt");

      if (dt) {
        const getDayWeather = weatherData?.daily.find(
          (item) => item.dt === parseInt(dt)
        );

        setWeather(getDayWeather, weatherData?.location);
      }
    }
  };

  const slideContent = weatherData?.daily.map((item) => {
    return (
      <SwiperSlide
        data-dt={item.dt}
        className={style.sliderSlide}
        key={item.dt}
      >
        <Typography variant="h4" className={style.sliderSlideContent}>
          {dateToWeekDay(item.dt)}
        </Typography>
        <Sun />
      </SwiperSlide>
    );
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Swiper
      modules={[Navigation, EffectCoverflow]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      effect="coverflow"
      slidesPerView={3}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        slideShadows: false,
        depth: 250,
      }}
      onAfterInit={(swiper) => getDayWeather(swiper)}
      onSlideChange={(swiper) => getDayWeather(swiper)}
      breakpoints={{
        640: {
          coverflowEffect: {
            stretch: 80,
          },
        },
        991.98: {
          coverflowEffect: {
            stretch: 0,
          },
        },
      }}
      className={style.slider}
    >
      {slideContent}
      <div className={`swiper-button-prev ${style.prev}`}></div>
      <div className={`swiper-button-next ${style.next}`}></div>
    </Swiper>
  );
};
