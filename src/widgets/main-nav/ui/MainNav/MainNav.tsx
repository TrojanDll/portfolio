"use client";

import { getActiveMenuItemIndex } from "../../model/get-active-menu-item-index.util";
import { mainNavItemsData } from "../../model/main-nav-items.data";
import { MainNavItem } from "../MainNavItem/MainNavItem";
import styles from "./MainNav.module.scss";
import cn from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface IProps {
  className?: string;
}

export function MainNav({ className }: IProps) {
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState<number>(0);
  const currienrUrl = usePathname();

  useEffect(() => {
    setActiveMenuItemIndex(getActiveMenuItemIndex(currienrUrl));
  }, [currienrUrl]);

  return (
    <div className={cn(className, styles.root)}>
      {mainNavItemsData.map((item, i) => (
        <MainNavItem
          onClick={() => setActiveMenuItemIndex(i)}
          key={i}
          className={styles.mainNavItem}
          description={item.description}
          isActive={i === activeMenuItemIndex}
          title={item.title}
        />
      ))}
    </div>
  );
}
