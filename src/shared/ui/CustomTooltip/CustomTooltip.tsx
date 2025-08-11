"use client";

import styles from "./CustomTooltip.module.scss";
import cn from "clsx";
import { Tooltip } from "radix-ui";
import { PropsWithChildren, ReactNode, useState } from "react";

interface IProps {
  className?: string;
  hasArrow?: boolean;
  trigger: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "center" | "start" | "end";
  disabled?: boolean;
}

export function CustomTooltip({
  className,
  hasArrow = false,
  children,
  trigger,
  side,
  sideOffset,
  align,
  disabled = false,
}: PropsWithChildren<IProps>) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Tooltip.Provider delayDuration={200}>
        <Tooltip.Root
          open={disabled ? false : open}
          onOpenChange={setOpen}
        >
          <Tooltip.Trigger asChild>{trigger}</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side={side}
              sideOffset={sideOffset}
              align={align}
              className={cn(styles.content, className)}
            >
              {children}
              {hasArrow && <Tooltip.Arrow className={styles.arrow} />}
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}
