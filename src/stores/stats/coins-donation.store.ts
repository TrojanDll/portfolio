import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface ICoinsDonation {
  isDonatedOnce: boolean;
  setIsDonatedOnce: (value: boolean) => void;
}

const useCoinsDonation = create<ICoinsDonation>()(
  persist(
    immer((set) => ({
      isDonatedOnce: false,
      setIsDonatedOnce: (value: boolean) =>
        set((state) => {
          state.isDonatedOnce = value;
        }),
    })),
    {
      name: "donated-once-store",
      storage: {
        getItem: (key) => {
          const stored = localStorage.getItem(key);
          return stored ? JSON.parse(stored) : null;
        },
        setItem: (key, value) => {
          localStorage.setItem(key, JSON.stringify(value));
        },
        removeItem: (key) => {
          localStorage.removeItem(key);
        },
      },
    }
  )
);

export default useCoinsDonation;
