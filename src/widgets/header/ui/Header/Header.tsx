"use client";

import styles from "./Header.module.scss";
import Container from "@/shared/ui/Container/Container";
import Level from "@/shared/ui/Level/Level";
import CurrentTime from "@/shared/ui/CurrentTime/CurrentTime";
import { Coins } from "@/features/coins";

export function Header() {
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
