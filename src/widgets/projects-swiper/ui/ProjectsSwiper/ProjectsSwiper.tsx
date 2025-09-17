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

  return <div className={cn(className, styles.root)}>ProjectsSwiper</div>;
}
