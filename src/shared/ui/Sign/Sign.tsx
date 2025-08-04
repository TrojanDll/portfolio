import styles from "./Sign.module.scss";
import cn from "clsx";
import Image from "next/image";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

export function Sign({ className, children }: PropsWithChildren<IProps>) {
  return (
    <div className={cn(className, styles.root)}>
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
