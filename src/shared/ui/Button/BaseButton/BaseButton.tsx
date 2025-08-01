import React, { forwardRef } from "react";
import styles from "./BaseButton.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "solid";
  shape?: "square" | "default";
  size?: "small" | "medium" | "large";
  className?: string;
}

const BaseButton = forwardRef<HTMLButtonElement, IProps>(
  (
    {
      variant = "outlined",
      size = "medium",
      className = "",
      shape = "default",
      children,
      ...rest
    },
    ref
  ) => (
    <button
      ref={ref}
      className={`${className} ${styles.root} ${styles[variant]} ${styles[size]} ${styles[shape]}`}
      {...rest}
    >
      {children}
    </button>
  )
);

BaseButton.displayName = "BaseButton";
export default BaseButton;
