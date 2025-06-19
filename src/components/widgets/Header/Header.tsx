import React from "react";

import styles from "./Header.module.scss";
import Level from "@/components/ui/Level/Level";
import Container from "@/components/ui/Container/Container";
import Coins from "@/components/features/Coins/Coins";

export default function Header() {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.right}>
          <Level levelCount={25} />
          <Coins />
        </div>
      </Container>
    </header>
  );
}
