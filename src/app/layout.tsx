import type { Metadata } from "next";

import "./globals.scss";

import { Providers } from "./providers";
import { SITE_NAME } from "@/shared/constants/seo.constants";
import MainGlow from "@/shared/ui/MainGlow/MainGlow";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

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
      <body>
        <Providers>
          <MainGlow />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
