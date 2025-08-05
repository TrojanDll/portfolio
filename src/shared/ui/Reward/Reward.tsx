import styles from "./Reward.module.scss";
import cn from "clsx";
import Image from "next/image";

interface IProps {
  className?: string;
  imageUrl: string;
  count: number;
}

export function Reward({ className, imageUrl, count }: IProps) {
  return (
    <div className={cn(className, styles.root)}>
      <Image
        width={40}
        height={40}
        alt=""
        src={imageUrl}
        className={styles.image}
      />

      <div className={styles.count}>+{count}</div>
    </div>
  );
}
