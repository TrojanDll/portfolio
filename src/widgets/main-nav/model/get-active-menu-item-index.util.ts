import { PAGES } from "@/shared/config/pages-url.config";

export function getActiveMenuItemIndex(currientUrl: string): number {
  if (currientUrl === PAGES.HOME) {
    return 0;
  } else if (currientUrl === PAGES.ACHIEVMENTS) {
    return 1;
  } else if (currientUrl === PAGES.ABOUT) {
    return 2;
  }
  return 0;
}
