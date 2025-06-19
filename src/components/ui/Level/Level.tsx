"use client";

import React from "react";

import styles from "./Level.module.scss";

interface IProps {
  levelCount?: number;
}

export default function Level({ levelCount = 26 }: IProps) {

  return (
    <div className={styles.root}>
      <span className={styles.count}>{levelCount}</span>
      <div className={styles.text}>LEVEL</div>
    </div>
  );
}
