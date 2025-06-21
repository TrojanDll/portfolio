import React from "react";

import profileImage from "/public/img/profile-image.png";

import styles from "./ProfileImage.module.scss";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className={styles.root}>
      <Image alt="" src={profileImage} width={164} height={148} />
      <div className={`${styles.corner} ${styles.topLeftCorner}`}></div>
      <div className={`${styles.corner} ${styles.topRightCorner}`}></div>
      <div className={`${styles.corner} ${styles.BottomRightCorner}`}></div>
      <div className={`${styles.corner} ${styles.BottomLeftCorner}`}></div>
    </div>
  );
}
