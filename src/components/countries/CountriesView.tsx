import { memo, useMemo, useState } from 'react';
import { Link } from 'wouter';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useDebouncedState } from '@react-hookz/web';

import { useCountries } from '@/api/hooks/useCountries';
import CountriesSearch from './CountriesSearch';
import CountriesCard from './CountriesCard';
import { normalizeStr } from '@/utils/normalizeStr';
import RegionSelect from './RegionSelect';
import CountryNotFound from '../common/CountryNotFound';

const CountriesView = memo(() => {
  const { data, error, isLoading } = useCountries();

  const [search, setSearch] = useDebouncedState('', 400);
  const [region, setRegion] = useState('all');

  const [animationParent] = useAutoAnimate();

  const handleSearch = (query: string) => setSearch(normalizeStr(query));
  const handleRegion = (v: string) => setRegion(v);

  const countries = useMemo(() => {
    if (!search && region === 'all') return data?.countries;

    return data?.countries?.filter(
      item =>
        normalizeStr(item.name.common).includes(search) &&
        (region === 'all' ? true : item.region.toLowerCase() === region.toLowerCase())
    );
  }, [search, data, region]);

  if (error) return <div className='text-4xl'>Something went wrong, try again later</div>;

  if (isLoading) return <div className='text-center text-4xl font-light'>Searching...</div>;

  return (
    <>
      <div className='grid gap-4 sm:grid-cols-[2fr,1fr] xl:grid-cols-[1.25fr,2fr]'>
        <CountriesSearch handleSearch={handleSearch} />
        <RegionSelect handleRegion={handleRegion} regions={data?.regions} />
      </div>
      {countries && countries.length > 0 ? (
        <div
          className='mt-6 grid justify-items-center gap-x-5 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-4'
          ref={animationParent}
        >
          {countries?.map(({ name, population, capital, flags, region, cca3 }) => {
            return (
              <Link href={`/${cca3}`} key={cca3}>
                <a className='w-max'>
                  <CountriesCard {...{ name, population, capital, flags, region }} />
                </a>
              </Link>
            );
          })}
        </div>
      ) : (
        <CountryNotFound text='Countries not found' />
      )}
    </>
  );
});

export default CountriesView;
