import { useEffect } from 'react';
import { Route, Switch } from 'wouter';

import ThemeSwitcher from './components/ThemeSwitcher';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import CountriesView from './components/countries/CountriesView';
import CountryView from './components/countries/CountryView';
import { useDarkMode } from './hooks/useDarkMode';

const App = () => {
  const [isDarkMode] = useDarkMode();

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <>
      <div className='flex min-h-screen flex-col overflow-hidden'>
        <Header>
          <ThemeSwitcher />
        </Header>
        <Main>
          <Switch>
            <Route path='/' component={CountriesView} />
            <Route path='/:cca3' component={CountryView} />
          </Switch>
        </Main>
      </div>
    </>
  );
};

export default App;
