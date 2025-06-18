"use client";

import React, { PropsWithChildren, useLayoutEffect, useRef } from "react";
import styles from "./AnimatedFillingButton.module.scss";
import gsap from "gsap";

interface IProps {
  variant?: "outlined" | "solid";
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function AnimatedFillingButton({
  children,
  className,
  size = "medium",
  variant = "outlined",
}: PropsWithChildren<IProps>) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const btn = btnRef.current!;
    const ripple = rippleRef.current!;
    const border = borderRef.current!;

    console.log("borderRef:", borderRef.current);
    console.log(styles.border);

    const enter = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      gsap.set(ripple, { width: size, height: size, x, y, opacity: 1, scale: 0 });
      gsap.to(ripple, { scale: 2.5, duration: 0.6, ease: "power2.out" });
      gsap.to(btn, { color: "var(--dark)", duration: 0.3, ease: "power1.out" });
    };

    const leave = () => {
      gsap.to(ripple, { opacity: 0, duration: 0.4 });
      gsap.to(btn, { color: "var(--red)", duration: 0.3, ease: "power1.out" });
    };

    // const click = () => {
    //   console.log("click listener added");
    //   gsap.set(border, { scale: 1, opacity: 0.5 });
    //   gsap.to(border, {
    //     scale: 1.3,
    //     // opacity: 0,
    //     duration: 0.6,
    //     ease: "power2.out",
    //   });
    // };

    const click = () => {
      gsap.fromTo(
        btn,
        { boxShadow: "0 0 0 0px var(--red)" },
        {
          boxShadow: "0 0 0 10px rgba(255, 0, 0, 0)",
          duration: 0.6,
          ease: "power2.out",
        }
      );
    };

    btn.addEventListener("mouseenter", enter);
    btn.addEventListener("mouseleave", leave);
    btn.addEventListener("click", click);

    return () => {
      btn.removeEventListener("mouseenter", enter);
      btn.removeEventListener("mouseleave", leave);
      btn.removeEventListener("click", click);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className={`${styles.root} ${className} ${styles[variant]} ${styles[size]}`}
    >
      <div className={styles.border} ref={borderRef} />
      <div className={styles.ripple} ref={rippleRef} />
      {children}
    </button>
  );
}
