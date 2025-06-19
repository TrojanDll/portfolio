import React, { useLayoutEffect, useRef } from "react";
import styles from "./AnimatedFillingButton.module.scss";
import gsap from "gsap";
import BaseButton from "../BaseButton/BaseButton";

interface Props extends React.ComponentProps<typeof BaseButton> {}

export default function AnimatedFillingButton({ children, ...rest }: Props) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const btn = btnRef.current!;
      const ripple = rippleRef.current!;

      let enterTween: gsap.core.Tween | null = null;
      let leaveTween: gsap.core.Tween | null = null;

      const enter = (e: MouseEvent) => {
        leaveTween?.kill();

        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        gsap.set(ripple, { width: size, height: size, x, y, opacity: 1, scale: 0 });
        enterTween = gsap.to(ripple, { scale: 2.5, duration: 0.6, ease: "power2.out" });
        gsap.to(btn, { color: "var(--dark)", duration: 0.3, ease: "power1.out" });
      };

      const leave = () => {
        enterTween?.kill();
        leaveTween = gsap.to(ripple, { opacity: 0, duration: 0.4 });
        gsap.to(btn, { color: "var(--red)", duration: 0.3, ease: "power1.out" });
      };

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
    }, btnRef); // связываем контекст с ref-элементом

    return () => ctx.revert(); // автоматически убирает все анимации при размонтировании
  }, []);

  return (
    <BaseButton className={styles.root} ref={btnRef} {...rest}>
      {children}
      <div className={styles.ripple} ref={rippleRef} />
    </BaseButton>
  );
}
