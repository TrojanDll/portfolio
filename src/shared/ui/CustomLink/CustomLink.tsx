import styles from "./CustomLink.module.scss";
import cn from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string;
  href: string;
}

export function CustomLink({
  className,
  children,
  href,
}: PropsWithChildren<IProps>) {
  return (
    <Link
      href={href}
      className={cn(className, styles.root)}
    >
      {children}
    </Link>
  );
}
