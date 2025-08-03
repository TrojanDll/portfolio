import styles from "./MainPage.module.scss";
import Image from "next/image";

import { ProfileSidebar } from "@/widgets/profile-sidebar";
import { WelcomeScreen } from "@/widgets/welcome-screen";

import Container from "@/shared/ui/Container/Container";

export default function Home() {
  return (
    <div className={styles.root}>
      <Image
        className={styles.backgroundImage}
        width={1344}
        height={896}
        alt=""
        src="/img/main-bg.png"
      />
      <WelcomeScreen />
      <Container>
        <ProfileSidebar />
      </Container>
    </div>
  );
}
