'use client';
import changeAppTheme from '@/common/helpers/changeTheme';
import useThemeStore from '@/store/app/theme';
import { Switch, SwitchEvent } from '@nextui-org/react';
import { useEffect } from 'react';

const Theme = () => {
  const { theme, setTheme } = useThemeStore();

  const onChangeTheme = (e: SwitchEvent) => {
    e.target.checked ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => changeAppTheme(theme), [theme]);

  return (
    <div>
      <Switch checked={theme === 'dark'} onChange={onChangeTheme} />
    </div>
  );
};

export default Theme;
