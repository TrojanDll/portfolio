import type { TProjectsSwiperSlide } from "../../model/ProjectsSwiperSlide.types";
import styles from "./ProjectsSwiperSlide.module.scss";
import cn from "clsx";
import Image from "next/image";

import { CorneredContainer } from "@/shared/ui/CorneredContainer/CorneredContainer";

interface IProps {
  className?: string;
  slideData: TProjectsSwiperSlide;
}

export function ProjectsSwiperSlide({ className, slideData }: IProps) {
  return (
    <div className={cn(className, styles.root)}>
      <CorneredContainer className={styles.imageContainer}>
        <Image
          width={408}
          height={500}
          alt=""
          src={slideData.thumbnailImageUrl}
          className={styles.bgImage}
        />

        <Image
          width={408}
          height={300}
          alt=""
          src={slideData.thumbnailImageUrl}
          className={styles.thumbnailImage}
        />
      </CorneredContainer>
    </div>
  );
}
