import { useLocalStorageValue, useMediaQuery } from '@react-hookz/web';

export const useDarkMode = () => {
  const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)') ?? false;
  const darkMode = useLocalStorageValue<boolean | undefined>('darkTheme');
  const isDarkMode = darkMode.value == null ? isPreferredDark : darkMode.value;

  const setDarkMode = () => {
    darkMode.set(!isDarkMode);
  };
  return [isDarkMode, setDarkMode] as const;
};
