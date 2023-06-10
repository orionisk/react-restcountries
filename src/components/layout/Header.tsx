import { ReactNode } from 'react';
import { Link } from 'wouter';

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header className='bg-white p-3 shadow dark:bg-dark-2 dark:text-white dark:shadow-md dark:shadow-black/25 lg:py-6'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <a>
            <h1 className='text-xl font-bold sm:text-2xl'>Where in the world?</h1>
          </a>
        </Link>
        {children}
      </div>
    </header>
  );
};

export default Header;
