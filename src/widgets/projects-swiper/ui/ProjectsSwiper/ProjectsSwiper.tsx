"use client";

import styles from "./ProjectsSwiper.module.scss";
import cn from "clsx";
import { useState } from "react";
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";

interface IProps {
  className?: string;
}

export function ProjectsSwiper({ className }: IProps) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={cn(className, styles.root)}>
      <Swiper
        className={styles.swiper}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper: SwiperClass) => {}}
        onSwiper={setSwiper}
        style={{ width: "100%" }} // Добавьте это
      >
        <SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
