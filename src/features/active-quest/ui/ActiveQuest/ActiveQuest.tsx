import styles from "./ActiveQuest.module.scss";
import cn from "clsx";

import { LabeledValue } from "@/shared/ui/LabeledValue/LabeledValue";
import P from "@/shared/ui/P/P";
import { SignWithContent } from "@/shared/ui/SignWithContent/SignWithContent";

interface IProps {
  className?: string;
}

export function ActiveQuest({ className }: IProps) {
  return (
    <div className={cn(className, styles.root)}>
      <SignWithContent
        signClassName={styles.signText}
        signText="Активный квест"
      >
        <LabeledValue
          title="Название квеста"
          value="Портфолио"
          className={styles.questItem}
        />

        <LabeledValue
          title="Описание"
          className={styles.questItem}
        >
          <P>Создание личного сайта-портфолио с уникальным игровым дизайном</P>
        </LabeledValue>

        <LabeledValue
          title="Награды"
          className={styles.questItem}
        ></LabeledValue>
      </SignWithContent>
    </div>
  );
}
