import { useDarkMode } from '@/hooks/useDarkMode';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

const AppSkeleton = (props: SkeletonProps) => {
  const [isDarkMode] = useDarkMode();
  return (
    <Skeleton
      baseColor={isDarkMode ? '#2b3945' : '#fafafa'}
      highlightColor={isDarkMode ? '#202c37' : '#858585'}
      inline
      {...props}
    />
  );
};

export default AppSkeleton;
