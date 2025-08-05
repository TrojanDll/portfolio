import { Sign } from "../Sign/Sign";
import styles from "./SignWithContent.module.scss";
import cn from "clsx";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string;
  signClassName?: string;
  signText?: string;
}

export function SignWithContent({
  className,
  children,
  signText,
  signClassName,
}: PropsWithChildren<IProps>) {
  return (
    <div className={cn(className, styles.root)}>
      <Sign className={signClassName}>{signText}</Sign>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
