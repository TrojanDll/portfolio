import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface IWelcomeScreen {
  isEnteredOnce: boolean;
  setIsEnteredOnce: (value: boolean) => void;
}

const useWelcomeScreen = create<IWelcomeScreen>()(
  persist(
    immer((set) => ({
      isEnteredOnce: false,
      setIsEnteredOnce: (value: boolean) =>
        set((state) => {
          state.isEnteredOnce = value;
        }),
    })),
    {
      name: "entered-once-store",
      storage: {
        getItem: (key) => {
          const stored = sessionStorage.getItem(key);
          return stored ? JSON.parse(stored) : null;
        },
        setItem: (key, value) => {
          sessionStorage.setItem(key, JSON.stringify(value));
        },
        removeItem: (key) => {
          sessionStorage.removeItem(key);
        },
      },
    }
  )
);

export default useWelcomeScreen;
