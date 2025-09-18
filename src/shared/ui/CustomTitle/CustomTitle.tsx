import styles from "./CustomTitle.module.scss";
import cn from "clsx";
import type { PropsWithChildren } from "react";

interface IProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  titleStyle?: "default" | "secondary";
  className?: string;
}

export default function CustomTitle({
  tag = "h1",
  className,
  children,
  variant,
  titleStyle = "default",
}: PropsWithChildren<IProps>) {
  const Tag = tag;

  const titleVariant: string = variant || tag;

  return (
    <Tag
      className={cn(
        styles.root,
        className,
        styles[titleVariant],
        styles[titleStyle],
      )}
    >

      {children}
    </Tag>
  );
}
