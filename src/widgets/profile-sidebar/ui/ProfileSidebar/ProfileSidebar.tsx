import { ProfileSidebarInfo } from "../ProfileSidebarInfo/ProfileSidebarInfo";
import styles from "./ProfileSidebar.module.scss";
import cn from "clsx";

import ProfileImage from "@/shared/ui/ProfileImage/ProfileImage";

interface IProps {
  className?: string;
}

export function ProfileSidebar({ className }: IProps) {
  return (
    <div className={cn(styles.root, className)}>
      <ProfileImage imageUrl="/img/profile-image.png" />

      <ProfileSidebarInfo className={styles.info} />
    </div>
  );
}
