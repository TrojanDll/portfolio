import styles from "./MainLayout.module.scss";
import "./globals.scss";
import { Providers } from "./providers";
import type { Metadata } from "next";
import Image from "next/image";

import { ActiveQuestSidebar } from "@/widgets/active-quest-sidebar";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { ProfileSidebar } from "@/widgets/profile-sidebar";
import { WelcomeScreen } from "@/widgets/welcome-screen";

import { SITE_NAME } from "@/shared/constants/seo.constants";
import Container from "@/shared/ui/Container/Container";
import { ContentWrapper } from "@/shared/ui/ContentWrapper/ContentWrapper";
import MainGlow from "@/shared/ui/MainGlow/MainGlow";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Портфолио",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <body className={styles.body}>
        <Providers>
          <MainGlow />
          <Image
            className={styles.backgroundImage}
            width={1344}
            height={896}
            alt=""
            src="/img/main-bg.png"
          />
          <WelcomeScreen />

          <Header />
          <Container className={styles.container}>
            <ProfileSidebar className={styles.profileSidebar} />
            <ContentWrapper>{children}</ContentWrapper>
            <ActiveQuestSidebar className={styles.activeQuestSidebar} />
          </Container>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
