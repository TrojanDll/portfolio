import { Sign } from "../Sign/Sign";
import styles from "./SignWithContent.module.scss";
import cn from "clsx";
import { type PropsWithChildren } from "react";

interface IProps {
  className?: string;
  signClassName?: string;
  signTextClassName?: string;
  signText?: string;
  isDisabled?: boolean;
  contentBgVariant?: "default" | "dark";
}

export function SignWithContent({
  className,
  children,
  signText,
  signClassName,
  isDisabled = false,
  signTextClassName,
  contentBgVariant = "default",
}: PropsWithChildren<IProps>) {
  return (
    <div className={cn(className, styles.root, isDisabled ? styles.dark : "")}>
      <Sign
        signBgColorVariant={isDisabled ? "bgDark" : "default"}
        textColorVariant="textLight"
        className={signClassName}
      >
        {signText}
      </Sign>
      <div
        className={cn(
          styles.content,
          isDisabled ? styles.disabledContent : "",
          signTextClassName,
          contentBgVariant === "dark" ? styles.contentDark : "",
        )}
      >
        {children}
      </div>
    </div>
  );
}
