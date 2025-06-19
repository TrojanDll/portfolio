import React, { PropsWithChildren } from "react";

import styles from "./Container.module.scss";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container({ children }: PropsWithChildren<IProps>) {
  return <div className={styles.root}>{children}</div>;
}
