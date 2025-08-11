export function getIsEnteredOnceFromStorage(): boolean {
  try {
    if (sessionStorage) {
      return !!sessionStorage.getItem("entered-once-store");
    }
  } catch {
    return true;
  }

  return true;
}
