import type { TProjectsSwiperSlide } from "../../model/ProjectsSwiperSlide.types";
import styles from "./ProjectsSwiperSlide.module.scss";
import cn from "clsx";

import { CorneredContainer } from "@/shared/ui/CorneredContainer/CorneredContainer";

interface IProps {
  className?: string;
  slideData: TProjectsSwiperSlide;
}

export function ProjectsSwiperSlide({ className, slideData }: IProps) {
  return (
    <div className={cn(className, styles.root)}>
      <CorneredContainer>{slideData.shortDescription}</CorneredContainer>
    </div>
  );
}
