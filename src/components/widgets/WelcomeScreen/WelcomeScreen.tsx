"use client";

import React, { useLayoutEffect, useRef } from "react";

import styles from "./WelcomeScreen.module.scss";
import P from "@/components/ui/P/P";
import Button from "@/components/ui/Button/Button";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function WelcomeScreen() {
  const rootRef = useRef<HTMLDivElement>(null);
  const hiRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
      const split = new SplitText(hiRef.current!, {
        type: "chars",
        charsClass: styles.char,
      });

      const tl = gsap.timeline();

      tl.from(split.chars, {
        scaleY: 0,
        transformOrigin: "bottom center",
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });

      tl.from(
        contentRef.current,
        {
          x: 200,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=0.0"
      );

      const splitDescription = new SplitText(`.${styles.text}`, {
        type: "chars, words",
        mask: "chars",
        charsClass: styles.textChar,
      });

      const tween = gsap.from(splitDescription.chars, {
        duration: 0.6,
        yPercent: "random([-150, 150])",
        xPercent: "random([-150, 150])",
        stagger: {
          from: "random",
          amount: 0.6,
        },
        ease: "power3.out",
        opacity: 1,
      });

      // tl.call(() => {
      //   tween.timeScale(0.5).play(0);
      // });
      tween.timeScale(0.45).play(0);
    }, rootRef);

    return () => gsapContext.revert();
  }, []);

  return (
    <div ref={rootRef} className={styles.root}>
      <p ref={hiRef} className={styles.greetings}>
        Hi!
      </p>
      <div ref={contentRef} className={styles.content}>
        <h1 className={styles.title}>Добро пожаловать на мой сайт-портфолио</h1>
        <P className={styles.text}>
          Я создал этот сайт так, чтобы он напоминал игровой или научно-фантастический
          интерфейс.
        </P>
        <P className={styles.text}>
          Вы найдете здесь «достижения» и «квесты», отражающие прогресс в моей
          профессиональной жизни и связанные с тем, над чем я сейчас работаю.
        </P>
        <Button
          className={`${styles.button} btn`}
          variant="outlined"
          size="large"
          animation="filling"
        >
          Войти в систему
        </Button>
      </div>
    </div>
  );
}
