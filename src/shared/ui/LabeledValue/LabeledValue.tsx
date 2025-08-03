import styles from "./LabeledValue.module.scss";
import cn from "clsx";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string;
  title?: string;
  value?: string;
}

export function LabeledValue({
  className,
  children,
  title,
  value,
}: PropsWithChildren<IProps>) {
  return (
    <div className={cn(className, styles.root)}>
      <div className={styles.title}>{title}</div>
      <div className={cn(styles.value, value ? styles.stringValue : "")}>
        {value}
        {children}
      </div>
    </div>
  );
}
