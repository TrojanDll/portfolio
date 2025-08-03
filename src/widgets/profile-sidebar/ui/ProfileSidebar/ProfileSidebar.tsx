import styles from "./ProfileSidebar.module.scss";

import { LabeledValue } from "@/shared/ui/LabeledValue/LabeledValue";
import ProfileImage from "@/shared/ui/ProfileImage/ProfileImage";

export function ProfileSidebar() {
  return (
    <div className={styles.root}>
      <ProfileImage imageUrl="/img/profile-image.png" />

      <LabeledValue
        className={styles.labeledValue}
        title="ФИО"
        value="Джафаров Тимур Вугарович"
      />
    </div>
  );
}
