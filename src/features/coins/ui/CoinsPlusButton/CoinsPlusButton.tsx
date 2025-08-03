import styles from "./CoinsPlusButton.module.scss";
import cn from "clsx";

import Button from "@/shared/ui/Button/Button";
import { CustomTooltip } from "@/shared/ui/CustomTooltip/CustomTooltip";

interface IProps {
  className?: string;
  isTooltipDisabled?: boolean;
  onClick?: () => void;
}

export function CoinsPlusButton({
  className,
  isTooltipDisabled,
  onClick,
}: IProps) {
  return (
    <CustomTooltip
      className={styles.tooltip}
      side="right"
      sideOffset={8}
      disabled={isTooltipDisabled}
      trigger={
        <div>
          <Button
            onClick={onClick}
            className={cn(className, styles.plusButton)}
            shape="square"
            animation="filling"
          >
            +
          </Button>
        </div>
      }
    >
      Вы можете подарить только{" "}
      <span className={styles.spannedTooltipText}>1</span> монетку
    </CustomTooltip>
  );
}
