import styles from "./ContentWrapper.module.scss";
import cn from "clsx";
import { type PropsWithChildren } from "react";

import IconCornerBottomLeft from "@/shared/assets/icons/IconCornerBottomLeft";
import IconCornerBottomRight from "@/shared/assets/icons/IconCornerBottomRight";
import IconCornerTopLeft from "@/shared/assets/icons/IconCornerTopLeft";
import IconCornerTopRight from "@/shared/assets/icons/IconCornerTopRight";

interface IProps {
  className?: string;
}

export function ContentWrapper({
  className,
  children,
}: PropsWithChildren<IProps>) {
  return (
    <div className={cn(className, styles.root)}>
      {children}
      <IconCornerTopLeft
        className={`${styles.corner} ${styles.topLeftCorner}`}
      ></IconCornerTopLeft>
      <IconCornerTopRight
        className={`${styles.corner} ${styles.topRightCorner}`}
      ></IconCornerTopRight>
      <IconCornerBottomRight
        className={`${styles.corner} ${styles.BottomRightCorner}`}
      ></IconCornerBottomRight>
      <IconCornerBottomLeft
        className={`${styles.corner} ${styles.BottomLeftCorner}`}
      ></IconCornerBottomLeft>
    </div>
  );
}
