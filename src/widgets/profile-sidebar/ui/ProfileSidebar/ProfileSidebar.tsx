import { ProfileSidebarInfo } from "../ProfileSidebarInfo/ProfileSidebarInfo";
import styles from "./ProfileSidebar.module.scss";

import ProfileImage from "@/shared/ui/ProfileImage/ProfileImage";

export function ProfileSidebar() {
  return (
    <div className={styles.root}>
      <ProfileImage imageUrl="/img/profile-image.png" />

      <ProfileSidebarInfo className={styles.info} />
    </div>
  );
}
