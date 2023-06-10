import { useAutoAnimate } from '@formkit/auto-animate/react';
import { ReactNode } from 'react';

const Main = ({ children }: { children?: ReactNode }) => {
  const [animationParent] = useAutoAnimate({ duration: 350, easing: 'ease-out' });
  return (
    <main className='grow bg-light-1 px-3 py-4 text-black dark:bg-dark-1 dark:text-white md:py-8 lg:py-12'>
      <div className='container' ref={animationParent}>
        {children}
      </div>
    </main>
  );
};

export default Main;
