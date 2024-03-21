import { FC, useEffect, useState } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "../Typography/Typography";
import { useGetWeather } from "../../api/hooks";
import { dateToDMY, dateToWeekDay } from "../../helper/convertDate";
import { useSelectedWeather } from "../../../store";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-coverflow";
import { Swiper as SwiperInstance } from "swiper/types";
import style from "./SliderCondition.module.scss";
import { WeatherIcon } from "../../../icons/WeatherIcon";

export const SliderCondition: FC = () => {
  const { weatherData, isLoading } = useGetWeather("Bishkek");
  const updateWeather = useSelectedWeather((state) => state.setSelectedWeather);

  const selectedWeather = (swiper: SwiperInstance) => {
    if (swiper.slides.length > 0) {
      const currentSlide = swiper.slides[swiper.activeIndex];
      const dt = currentSlide.getAttribute("data-dt");

      if (!dt) return;

      const getCurrentWeather = weatherData?.daily.find(
        (item) => item.dt === parseInt(dt)
      );

      updateWeather(getCurrentWeather, weatherData?.location);
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
        <WeatherIcon condition={item.condition} />
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
      onAfterInit={(swiper) => selectedWeather(swiper)}
      onSlideChange={(swiper) => selectedWeather(swiper)}
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
