import type { ITheme } from '@/common/interfaces/i-theme';
import { THEME } from '@/common/interfaces/i-theme';
import { WINDOW_OBJ } from '@/constans';

const changeAppTheme = (theme: ITheme): void => {
  if (!WINDOW_OBJ) {
    return;
  }

  Object.values(THEME).forEach((t) => document.documentElement.classList.remove(t));
  document.documentElement.classList.add(theme);
};

export default changeAppTheme;
