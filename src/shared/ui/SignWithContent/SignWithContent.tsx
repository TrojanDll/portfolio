import { Sign } from "../Sign/Sign";
import styles from "./SignWithContent.module.scss";
import cn from "clsx";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string;
  signClassName?: string;
  signText?: string;
  isDisabled?: boolean;
}

export function SignWithContent({
  className,
  children,
  signText,
  signClassName,
  isDisabled = false,
}: PropsWithChildren<IProps>) {
  return (
    <div className={cn(className, styles.root)}>
      <Sign
        signBgColorVariant={isDisabled ? "bgDark" : "default"}
        textColorVariant="textLight"
        className={signClassName}
      >
        {signText}
      </Sign>
      <div
        className={cn(styles.content, isDisabled ? styles.disabledContent : "")}
      >
        {children}
      </div>
    </div>
  );
}
