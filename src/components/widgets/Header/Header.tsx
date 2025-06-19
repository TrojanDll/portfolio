"use client";

import React, { useEffect } from "react";

import styles from "./Header.module.scss";
import Level from "@/components/ui/Level/Level";
import Container from "@/components/ui/Container/Container";
import Coins from "@/components/features/Coins/Coins";
import { useGetStats } from "@/hooks/stats/get-stats.hook";

export default function Header() {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.right}>
          <Level />
          <Coins />
        </div>
      </Container>
    </header>
  );
}
