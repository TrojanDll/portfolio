import styles from "./ProfileSidebarInfo.module.scss";
import cn from "clsx";
import Link from "next/link";

import IconEmail from "@/shared/assets/icons/IconEmail";
import IconTelegram from "@/shared/assets/icons/IconTelegram";
import IconWhatsApp from "@/shared/assets/icons/IconWhatsApp";
import { LabeledValue } from "@/shared/ui/LabeledValue/LabeledValue";
import { Sign } from "@/shared/ui/Sign/Sign";

interface IProps {
  className?: string;
}

export function ProfileSidebarInfo({ className }: IProps) {
  return (
    <div className={cn(className)}>
      <LabeledValue
        className={styles.labeledValue}
        title="ФИО"
        value="Джафаров Тимур Вугарович"
      />

      <LabeledValue
        className={styles.labeledValue}
        title="Профессия"
        value="Frontend разработчик"
      />

      <LabeledValue
        className={styles.labeledValue}
        title="Контакты"
      >
        <div className={styles.socialLinksWrapper}>
          <Link
            className={styles.socialLink}
            href="https://t.me/trojandll"
          >
            <IconTelegram className={cn(styles.icon, styles.iconTelegram)} />
          </Link>

          <Link
            className={styles.socialLink}
            href="mailto:dzafarovt36@gmail.com"
          >
            <IconEmail className={cn(styles.icon, styles.iconEmail)} />
          </Link>

          <Link
            className={styles.socialLink}
            href="https://wa.me/79286079941"
          >
            <IconWhatsApp className={cn(styles.icon, styles.IconWhatsApp)} />
          </Link>
        </div>

        <Link
          href="tel:79286079941"
          className={styles.phone}
        >
          +7 (928) 607 99 41
        </Link>
      </LabeledValue>

      <LabeledValue
        className={styles.labeledValue}
        title="Статус"
      >
        <Sign>Свободен</Sign>
      </LabeledValue>
    </div>
  );
}
