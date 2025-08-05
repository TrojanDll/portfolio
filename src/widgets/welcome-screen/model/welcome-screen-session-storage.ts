export function getIsEnteredOnceFromStorage(): boolean {
  return !!sessionStorage.getItem("entered-once-store");
}
