import { ITheme } from '@/common/interfaces/i-theme';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IThemeStore {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}

const useThemeStore = create<IThemeStore>()(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) =>
        set((state) => {
          return { theme: theme };
        }),
    }),
    {
      name: 'theme-storage',
    },
  ),
);

export default useThemeStore;
