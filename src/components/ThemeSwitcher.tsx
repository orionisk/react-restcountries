import { useDarkMode } from '@/hooks/useDarkMode';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const ThemeSwitcher = () => {
  const [isDarkMode, setDarkMode] = useDarkMode();

  return (
    <button className='flex items-center gap-1 sm:gap-2' onClick={setDarkMode}>
      {isDarkMode ? (
        <>
          <BsFillMoonFill />
          Dark Mode
        </>
      ) : (
        <>
          <BsFillSunFill />
          Light Mode
        </>
      )}
    </button>
  );
};
export default ThemeSwitcher;
