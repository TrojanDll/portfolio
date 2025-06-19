"use client";

import React from "react";

import Button from "@/components/ui/Button/Button";

import styles from "./Coins.module.scss";

interface IProps {
  coinstCount?: number;
}

export default function Coins({ coinstCount = 32 }: IProps) {
  return (
    <div className={styles.root}>
      <Button className={styles.plusButton} shape="square" animation="filling">
        +
      </Button>

      <div className={styles.text}>
        <span className={styles.coins}>{coinstCount}</span>
        <div className={styles.description}>монет заработано</div>
      </div>
    </div>
  );
}
