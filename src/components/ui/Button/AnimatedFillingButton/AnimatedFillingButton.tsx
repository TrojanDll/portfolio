import React, { useLayoutEffect, useRef } from "react";
import styles from "./AnimatedFillingButton.module.scss";
import gsap from "gsap";
import BaseButton from "../BaseButton/BaseButton";

interface Props extends React.ComponentProps<typeof BaseButton> {}

export default function AnimatedFillingButton({ children, ...rest }: Props) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const btn = btnRef.current!;
    const ripple = rippleRef.current!;

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

    btn.addEventListener("mouseenter", enter);
    btn.addEventListener("mouseleave", leave);

    return () => {
      btn.removeEventListener("mouseenter", enter);
      btn.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <BaseButton className={styles.root} ref={btnRef} {...rest}>
      {children}
      <div className={styles.ripple} ref={rippleRef} />
    </BaseButton>
  );
}
