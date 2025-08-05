import styles from "./MainNavItem.module.scss";
import cn from 'clsx'

interface IProps {
  className?: string;
  title?: string;
  description?: string;
  isActive?: boolean;
}

export function MainNavItem({ className }: IProps) {
  return (
    <div className={cn(className, styles.root)}>MainNavItem</div>
  );
}