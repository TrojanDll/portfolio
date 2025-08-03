import styles from "./ProfileImage.module.scss";
import Image from "next/image";
import React from "react";

import IconCornerBottomLeft from "@/shared/assets/icons/IconCornerBottomLeft";
import IconCornerBottomRight from "@/shared/assets/icons/IconCornerBottomRight";
import IconCornerTopLeft from "@/shared/assets/icons/IconCornerTopLeft";
import IconCornerTopRight from "@/shared/assets/icons/IconCornerTopRight";

interface IProps {
  imageUrl: string;
}

export default function ProfileImage({ imageUrl }: IProps) {
  return (
    <div className={styles.root}>
      <Image
        alt=""
        src={imageUrl}
        width={164}
        height={148}
      />
      <IconCornerTopLeft
        className={`${styles.corner} ${styles.topLeftCorner}`}
      ></IconCornerTopLeft>
      <IconCornerTopRight
        className={`${styles.corner} ${styles.topRightCorner}`}
      ></IconCornerTopRight>
      <IconCornerBottomRight
        className={`${styles.corner} ${styles.BottomRightCorner}`}
      ></IconCornerBottomRight>
      <IconCornerBottomLeft
        className={`${styles.corner} ${styles.BottomLeftCorner}`}
      ></IconCornerBottomLeft>
    </div>
  );
}
