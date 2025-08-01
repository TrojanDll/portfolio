"use client";

import React, { useEffect } from "react";

import styles from "./Level.module.scss";
import { useGetStats } from "@/hooks/stats/get-stats.hook";

interface IProps {
  levelCount?: number;
}

export default function Level() {
  const { data, mutate, isPending, isError } = useGetStats();

  useEffect(() => {
    mutate();
  }, []);

  return (
    <div className={styles.root}>
      <span className={styles.count}>{data?.level ? data.level : 21}</span>
      <div className={styles.text}>LEVEL</div>
    </div>
  );
}
