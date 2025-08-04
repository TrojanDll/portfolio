import styles from "./ProfileSidebar.module.scss";
import Link from "next/link";

import IconBoxArrow from "@/shared/assets/icons/IconBoxArrow";
import IconLink from "@/shared/assets/icons/IconLink";
import IconTelegram from "@/shared/assets/icons/IconTelegram";
import { CustomLink } from "@/shared/ui/CustomLink/CustomLink";
import { LabeledValue } from "@/shared/ui/LabeledValue/LabeledValue";
import ProfileImage from "@/shared/ui/ProfileImage/ProfileImage";
import { Sign } from "@/shared/ui/Sign/Sign";

export function ProfileSidebar() {
  return (
    <div className={styles.root}>
      <ProfileImage imageUrl="/img/profile-image.png" />

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

      {/* <LabeledValue
        className={styles.labeledValue}
        title="Telegram"
      >
        <CustomLink href="https://t.me/trojandll">
          @trojandll
          <IconBoxArrow className={styles.contansLinkSvg} />
        </CustomLink>
      </LabeledValue>

      <LabeledValue
        className={styles.labeledValue}
        title="Email"
      >
        <CustomLink href="mailto:dzafarovt36@gmail.com">
          d36@gmail.com
          <IconBoxArrow className={styles.contansLinkSvg} />
        </CustomLink>
      </LabeledValue> */}

      {/* <LabeledValue
        className={styles.labeledValue}
        title="Контакты"
      >
        <div className={styles.contact}>
          <IconTelegram />
          <CustomLink
            className={styles.contactLink}
            href="https://t.me/trojandll"
          >
            @trojandll
          </CustomLink>
        </div>

        <div className={styles.contact}>
          <IconTelegram />
          <CustomLink
            className={styles.contactLink}
            href="https://t.me/trojandll"
          >
            dzafarovt36@gmail.com
          </CustomLink>
        </div>
      </LabeledValue> */}

      <LabeledValue
        className={styles.labeledValue}
        title="Статус"
      >
        <Sign>Свободен</Sign>
      </LabeledValue>
    </div>
  );
}
