import React from "react";

import styles from "./WelcomeScreen.module.scss";
import P from "@/components/ui/P/P";
import Button from "@/components/ui/Button/Button";

export default function WelcomeScreen() {
  return (
    <div className={styles.root}>
      <p className={styles.greetings}>Hi!</p>
      <div className={styles.content}>
        <h1 className={styles.title}>Добро пожаловать на мой сайт-портфолио</h1>
        <P className={styles.text}>
          Я создал этот сайт так, чтобы он напоминал игровой или научно-фантастический
          интерфейс.
        </P>

        <P className={styles.text}>
          Вы найдете здесь «достижения» и «квесты», отражающие прогресс в моей
          профессиональной жизни и связанные с тем, над чем я сейчас работаю.
        </P>

        <Button className={styles.button} variant="outlined">
          Войти в систему
        </Button>
      </div>
    </div>
  );
}
