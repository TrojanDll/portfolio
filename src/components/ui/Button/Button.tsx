import React, { PropsWithChildren } from "react";

import styles from "./Button.module.scss";

interface IProps {
  variant?: "outlined" | "solid";
  className?: string;
}

export default function Button({
  variant = "outlined",
  children,
  className,
}: PropsWithChildren<IProps>) {
  return (
    <button className={`${styles.root} ${className} ${styles[variant]}`}>
      {children}
    </button>
  );
}
