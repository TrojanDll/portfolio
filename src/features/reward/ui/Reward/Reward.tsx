import styles from "./Reward.module.scss";
import cn from 'clsx'

interface IProps {
  className?: string;
  // rewardType?: 
}

export function Reward({ className }: IProps) {
  return (
    <div className={cn(className, styles.root)}>Reward</div>
  );
}