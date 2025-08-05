import styles from "./ActiveQuestSidebar.module.scss";
import cn from "clsx";

import { ActiveQuest } from "@/features/active-quest";

interface IProps {
  className?: string;
}

export function ActiveQuestSidebar({ className }: IProps) {
  return (
    <div className={cn(styles.root, className)}>
      <ActiveQuest />
    </div>
  );
}
