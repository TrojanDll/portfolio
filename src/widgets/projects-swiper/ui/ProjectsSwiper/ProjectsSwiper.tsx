"use client";

import { ProjectsSwiperSlide } from "../ProjectsSwiperSlide/ProjectsSwiperSlide";
import styles from "./ProjectsSwiper.module.scss";
import cn from "clsx";
import { useState } from "react";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";

import { PROJECTS } from "@/entities/project";

import CustomTitle from "@/shared/ui/CustomTitle/CustomTitle";

interface IProps {
  className?: string;
}

export function ProjectsSwiper({ className }: IProps) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={cn(className, styles.root)}>
      <CustomTitle className={styles.title}>Проекты</CustomTitle>

      <Swiper
        effect="coverflow"
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop
        modules={[EffectCoverflow]}
        className={styles.swiper}
        spaceBetween={16}
        slidesPerView={3}
        onSlideChange={(swiper: SwiperClass) => {}}
        onSwiper={setSwiper}
        style={{ width: "100%" }}
      >
        <SwiperSlide className={styles.slide}>
          <ProjectsSwiperSlide slideData={PROJECTS[0]} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
