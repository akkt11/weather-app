import { FC } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Sun } from "../../icons/Sun";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/effect-coverflow";
import style from "./SliderCondition.module.scss";
import { Typography } from "../Typography/Typography";

export const SliderCondition: FC = () => {
  const slides = Array.from({ length: 7 }).map(
    (el, index) => `Slide ${index + 1}`
  );

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
      {slides.map((slideContent) => (
        <SwiperSlide className={style.sliderSlide}>
          <Typography variant="h4" className={style.sliderSlideContent}>
            {slideContent}
          </Typography>
          <Sun />
        </SwiperSlide>
      ))}
      <div className={`swiper-button-prev ${style.prev}`}></div>
      <div className={`swiper-button-next ${style.next}`}></div>
    </Swiper>
  );
};
