import styles from "./Footer.module.scss";

import { MainNav } from "@/widgets/main-nav";

export function Footer() {
  return (
    <footer className={styles.root}>
      <MainNav />
    </footer>
  );
}
