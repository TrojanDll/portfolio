import styles from "./MainNavItem.module.scss";
import cn from "clsx";

import { SignWithContent } from "@/shared/ui/SignWithContent/SignWithContent";

interface IProps {
  className?: string;
  title?: string;
  description?: string;
  isActive?: boolean;
}

export function MainNavItem({
  className,
  description,
  isActive,
  title,
}: IProps) {
  return (
    <SignWithContent
      signText={title}
      className={cn(className, styles.root)}
    >
      MainNavItem
    </SignWithContent>
  );
}
