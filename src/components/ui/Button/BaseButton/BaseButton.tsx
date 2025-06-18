import React, { forwardRef } from "react";
import styles from "./BaseButton.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "solid";
  size?: "small" | "medium" | "large";
  className?: string;
}

const BaseButton = forwardRef<HTMLButtonElement, IProps>(
  ({ variant = "outlined", size = "medium", className = "", children, ...rest }, ref) => (
    <button
      ref={ref}
      className={`${styles.root} ${styles[variant]} ${styles[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
);

BaseButton.displayName = "BaseButton";
export default BaseButton;
