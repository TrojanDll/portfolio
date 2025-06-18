import React, { PropsWithChildren } from "react";

import styles from "./P.module.scss";

interface IProps {
  uppercase?: boolean;
  className?: string;
}

export default function P({ children, uppercase, className }: PropsWithChildren<IProps>) {
  return (
    <div className={`${styles.root} ${uppercase ? styles.uppercase : ""} ${className}`}>
      {children}
    </div>
  );
}
