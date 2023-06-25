import { ITheme } from '@/common/interfaces/i-theme';
import { themeNameProperty } from '@/constans';
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
          document.cookie = `${themeNameProperty}=${theme}`;
          return { theme: theme };
        }),
    }),
    {
      name: 'theme-storage',
    },
  ),
);

export default useThemeStore;
