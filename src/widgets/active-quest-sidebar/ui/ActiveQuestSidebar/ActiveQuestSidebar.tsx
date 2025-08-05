import styles from "./ActiveQuestSidebar.module.scss";
import cn from "clsx";

interface IProps {
  className?: string;
}

export function ActiveQuestSidebar({ className }: IProps) {
  return <div className={cn(styles.root, className)}>ActiveQuestSidebar</div>;
}
