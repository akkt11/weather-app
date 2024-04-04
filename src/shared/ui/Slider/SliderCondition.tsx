import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-coverflow";

import { FC, useEffect, useRef } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper/types";

import { WeatherIcon } from "../../../icons/WeatherIcon";
import { useLocation, useSelectedWeather } from "../../../store/store";
import { useGetWeather } from "../../api/hooks";
import { dateToWeekDay } from "../../helpers/convertDate";
import { Typography } from "../Typography/Typography";
import style from "./SliderCondition.module.scss";

export const SliderCondition: FC = () => {
  const swiperRef = useRef<SwiperInstance>();
  const setSelectedWeather = useSelectedWeather(
    state => state.setSelectedWeather,
  );
  const location = useLocation(state => state.location);
  const { weatherData } = useGetWeather(location);

  useEffect(() => {
    if (swiperRef.current) {
      selectWeather(swiperRef.current);
    }
  }, [weatherData]);

  const selectWeather = (swiper: SwiperInstance) => {
    if (swiper.slides.length > 0) {
      const currentSlide = swiper.slides[swiper.activeIndex];
      const dt = currentSlide.getAttribute("data-dt");

      if (!dt) return;

      const getCurrentWeather = weatherData?.daily.find(
        item => item.dt === parseInt(dt),
      );

      setSelectedWeather(getCurrentWeather);
    }
  };

  const slideContent = weatherData?.daily.map(item => {
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
      onSlideChange={swiper => selectWeather(swiper)}
      onSwiper={swiper => (swiperRef.current = swiper)}
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
