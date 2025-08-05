import styles from "./P.module.scss";
import React, { PropsWithChildren } from "react";

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
  uppercase?: boolean;
  variant?: "default" | "strong";
}

export default function P({
  children,
  uppercase,
  className = "",
  variant = "default",

  ...props
}: PropsWithChildren<IProps>) {
  return (
    <p
      className={`${styles.root} ${uppercase ? styles.uppercase : ""} ${className} ${styles[variant]}`}
      {...props}
    >
      {children}
    </p>
  );
}
