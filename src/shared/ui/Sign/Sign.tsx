import styles from "./Sign.module.scss";
import cn from "clsx";
import Image from "next/image";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string;
  textColorVariant?: "default" | "textLight";
  signBgColorVariant?: "default" | "bgDark";
}

export function Sign({
  className,
  children,
  textColorVariant = "default",
  signBgColorVariant = "default",
}: PropsWithChildren<IProps>) {
  return (
    <div
      className={cn(
        className,
        styles.root,
        styles[textColorVariant],
        styles[signBgColorVariant],
      )}
    >
      {children}
      <Image
        className={styles.backgroundImage}
        width={39}
        height={39}
        alt=""
        src="/icons/hexagons.svg"
      />
    </div>
  );
}
