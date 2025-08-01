import React, { PropsWithChildren } from "react";

import styles from "./P.module.scss";

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
  uppercase?: boolean;
}

export default function P({
  children,
  uppercase,
  className = "",
  
  ...props
}: PropsWithChildren<IProps>) {
  return (
    <p
      className={`${styles.root} ${uppercase ? styles.uppercase : ""} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
