import styles from "./CustomTooltip.module.scss";
import cn from "clsx";
import { Tooltip } from "radix-ui";

interface IProps {
  className?: string;
}

export function CustomTooltip({ className }: IProps) {
  return (
    <div className={cn(className, styles.root)}>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger />
          <Tooltip.Portal>
            <Tooltip.Content>
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}
