"use client";

import React from "react";

import Button from "@/components/ui/Button/Button";

import styles from "./Coins.module.scss";

export default function Coins() {
  return (
    <div className={styles.root}>
      <Button className={styles.plusButton} shape="square" animation="filling">
        +
      </Button>

      <div className={styles.text}>
        <span className={styles.coins}>48</span>
        <div className={styles.description}>монет заработано</div>
      </div>
    </div>
  );
}
