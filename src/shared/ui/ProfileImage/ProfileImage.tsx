import React from "react";

import styles from "./ProfileImage.module.scss";
import Image from "next/image";

interface IProps {
  imageUrl: string;
}

export default function ProfileImage({ imageUrl }: IProps) {
  return (
    <div className={styles.root}>
      <Image alt="" src={imageUrl} width={164} height={148} />
      <div className={`${styles.corner} ${styles.topLeftCorner}`}></div>
      <div className={`${styles.corner} ${styles.topRightCorner}`}></div>
      <div className={`${styles.corner} ${styles.BottomRightCorner}`}></div>
      <div className={`${styles.corner} ${styles.BottomLeftCorner}`}></div>
    </div>
  );
}
