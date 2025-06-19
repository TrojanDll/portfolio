"use client";

import React, { useEffect } from "react";

import styles from "./Header.module.scss";
import Level from "@/components/ui/Level/Level";
import Container from "@/components/ui/Container/Container";
import Coins from "@/components/features/Coins/Coins";
import { useGetStats } from "@/hooks/stats/get-stats.hook";
import CurrentTime from "@/components/ui/CurrentTime/CurrentTime";

export default function Header() {
  return (
    <Container>
      <header className={styles.root}>
        <div className={styles.right}>
          <Level />
          <Coins />
        </div>
        <div className={styles.left}>
          <CurrentTime />
        </div>
      </header>
    </Container>
  );
}
