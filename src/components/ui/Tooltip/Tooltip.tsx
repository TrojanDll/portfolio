"use client";

import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

import styles from "./Tooltip.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  appearanceVariant?: "click" | "hover";
  durationInSeconds?: number;
  position?: "top" | "left" | "right" | "bottom";
  isActive?: boolean;
}

export default function Tooltip({
  text,
  children,
  className,
  appearanceVariant = "click",
  durationInSeconds,
  position = "right",
  ...props
}: PropsWithChildren<IProps>) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  function handleEvent(eventType: "click" | "onMouseEnter" | "onMouseLeave") {
    if (appearanceVariant === "hover") {
      if (eventType === "onMouseEnter") {
        setIsVisible(true);
      }

      if (eventType === "onMouseLeave") {
        setIsVisible(false);
      }
    }

    if (appearanceVariant === "click" && eventType === "click") {
      setIsVisible((prev) => !prev);

      if (durationInSeconds) {
        timeoutRef.current = setTimeout(() => {
          closeTooltip();
        }, durationInSeconds * 1000);
      }
    }
  }

  const { contextSafe } = useGSAP({ scope: tooltipRef });

  const closeTooltip = contextSafe(() => {
    const tl = gsap.timeline();

    tl.to(tooltipRef.current, { opacity: 0, duration: 1 });
    tl.call(() => {
      setIsVisible(false);
    });
    tl.set(tooltipRef.current, { opacity: 1, delay: 0.2 });
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`${styles.root} ${className}`} {...props}>
      <div
        onMouseEnter={() => handleEvent("onMouseEnter")}
        onMouseLeave={() => handleEvent("onMouseLeave")}
        onClick={() => handleEvent("click")}
        className={styles.childrenContainer}
      >
        {children}
      </div>
      <div
        className={`${styles.tooltip} ${className} ${isVisible ? styles.visible : ""} ${
          styles[position]
        }`}
        ref={tooltipRef}
      >
        Это тестовая подсказка, которая будет длиннее 160 пикселей
      </div>
    </div>
  );
}
