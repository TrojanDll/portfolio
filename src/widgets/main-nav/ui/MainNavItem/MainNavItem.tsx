import styles from "./MainNavItem.module.scss";
import cn from "clsx";

import { SignWithContent } from "@/shared/ui/SignWithContent/SignWithContent";

interface IProps {
  className?: string;
  title?: string;
  description?: string;
  isActive?: boolean;
  onClick: () => void;
}

export function MainNavItem({
  className,
  description,
  isActive,
  title,
  onClick,
}: IProps) {
  return (
    <button
      onClick={onClick}
      className={cn(className, styles.root)}
    >
      <SignWithContent
        signText={title}
        signTextClassName={styles.text}
        isDisabled={!isActive}
        contentBgVariant="dark"
      >
        {description}
      </SignWithContent>
    </button>
  );
}
