import styles from "./Container.module.scss";
import cn from "clsx";
import React, { PropsWithChildren } from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container({
  children,
  className,
}: PropsWithChildren<IProps>) {
  return <div className={cn(styles.root, className)}>{children}</div>;
}
