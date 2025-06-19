// components/CurrentTime.tsx
"use client";

import { useState, useEffect } from "react";

import styles from "./CurrentTime.module.scss";
import P from "../P/P";

export default function CurrentTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.root}>
      <span className={styles.title}>Локальное время: </span>
      <span className={styles.time}>{time}</span>
    </div>
  );
}
