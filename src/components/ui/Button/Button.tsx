"use client";

import React, { PropsWithChildren } from "react";

import styles from "./Button.module.scss";
import AnimatedFillingButton from "./AnimatedFillingButton/AnimatedFillingButton";

interface IProps {
  variant?: "outlined" | "solid";
  size?: "small" | "medium" | "large";
  animation?: "none" | "filling";
  className?: string;
}

export default function Button({
  variant = "outlined",
  children,
  className,
  size = "medium",
  animation = "none",
}: PropsWithChildren<IProps>) {
  function specifiedButtons(): React.ReactNode {
    if (animation === "filling") {
      return (
        <AnimatedFillingButton className={className} size={size} variant={variant}>
          {children}
        </AnimatedFillingButton>
      );
    }

    return;
  }

  return (
    <>
      {animation === "none" ? (
        <button
          className={`${styles.root} ${className} ${styles[variant]} ${styles[size]}`}
        >
          {children}
        </button>
      ) : (
        specifiedButtons()
      )}
    </>
  );
}
