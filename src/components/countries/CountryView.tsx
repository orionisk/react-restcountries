import { useCountry } from '@/api/hooks/useCountry';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useLocation, useRoute } from 'wouter';
import AppSkeleton from '../common/Skeleton';
import { BiLoaderAlt } from 'react-icons/bi';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import CountryNotFound from '../common/CountryNotFound';

const CountryView = () => {
  const [match, params] = useRoute('/:cca3');
  const [location] = useLocation();

  const { data, error, isLoading } = useCountry(params?.cca3);

  const hasBorderings = data?.borderings && data.borderings.length > 0;

  return (
    <div>
      <Link href='/'>
        <a className='inline-flex items-center justify-center gap-2 rounded-lg bg-white px-10 py-3 font-light shadow-md dark:bg-dark-2'>
          <BsArrowLeft />
          <span>Back</span>
        </a>
      </Link>
      {error ? (
        <CountryNotFound />
      ) : (
        <SwitchTransition>
          <CSSTransition key={location} in={match} timeout={300} classNames='fade'>
            <div
              className='mt-4 grid items-start gap-5 md:mt-7 md:grid-cols-2 lg:gap-10'
              id={params?.cca3}
            >
              <div className='relative flex w-full justify-center max-md:h-52 md:min-h-[16rem]'>
                {isLoading ? (
                  <BiLoaderAlt
                    style={{ translate: '-50% -50%' }}
                    className='absolute inset-1/2 animate-twSpin text-5xl animate-infinite'
                  />
                ) : (
                  <img
                    className='object-contain'
                    src={data?.country.flags.svg}
                    alt={data?.country.flags.alt}
                    loading='lazy'
                  />
                )}
              </div>
              <section className='md:py-4'>
                {isLoading ? (
                  <AppSkeleton
                    className='h-9 w-2/3 sm:w-1/3'
                    containerClassName='justify-center max-sm:flex'
                  />
                ) : (
                  <h2 className='text-3xl font-bold max-sm:text-center'>
                    {data?.country.name.common}
                  </h2>
                )}
                <div className='mt-5 grid gap-4 sm:grid-cols-2 sm:items-start  sm:gap-5'>
                  {isLoading ? (
                    <AppSkeleton
                      containerClassName='grid sm:w-2/3 gap-4'
                      className='h-6'
                      count={5}
                    />
                  ) : (
                    <ul className='grid gap-4'>
                      <li>
                        <b className='font-semibold'>Native name: </b>
                        {Object.values(data?.country.name.nativeName || [])[0]?.common}
                      </li>
                      <li>
                        <b className='font-semibold'>Population:</b> {data?.country.population}
                      </li>
                      <li>
                        <b className='font-semibold'>Region:</b> {data?.country.region}
                      </li>
                      <li>
                        <b className='font-semibold'>Sub Region:</b> {data?.country.subregion}
                      </li>
                      <li>
                        <b className='font-semibold'>Capital:</b> {data?.country.capital}
                      </li>
                    </ul>
                  )}
                  {isLoading ? (
                    <AppSkeleton
                      containerClassName='grid sm:w-2/3 gap-4'
                      className='h-6'
                      count={3}
                    />
                  ) : (
                    <ul className='grid gap-4'>
                      <li>
                        <b className='font-semibold'>Top Level Domain:</b> {data?.country.tld[0]}
                      </li>
                      <li>
                        <b className='font-semibold'>Currencies: </b>
                        {Object.values(data?.country.currencies || [])
                          .map(n => n.name)
                          .join(', ')}
                      </li>
                      <li>
                        <b className='font-semibold'>Languages:</b>{' '}
                        {Object.values(data?.country.languages || []).join(', ')}
                      </li>
                    </ul>
                  )}
                </div>
                <div className='mt-8 flex gap-2 max-lg:flex-col sm:gap-4 lg:mt-16'>
                  {isLoading ? (
                    <AppSkeleton containerClassName='w-1/2' className='h-6' />
                  ) : (
                    <>
                      <p className='shrink-0 font-semibold'>Border Countries:</p>
                      <ul className='inline-flex flex-wrap gap-4'>
                        {hasBorderings ? (
                          data?.borderings?.map(({ name, cca3 }) => {
                            return (
                              <li key={name.common}>
                                <Link href={`/${cca3}`}>
                                  <a className='bg-white px-3 py-1.5 text-xs font-light shadow-md transition-colors hover:text-purple dark:bg-dark-2'>
                                    {name.common}
                                  </a>
                                </Link>
                              </li>
                            );
                          })
                        ) : (
                          <span className='pt-0.5 text-sm'>No borders...</span>
                        )}
                      </ul>
                    </>
                  )}
                </div>
              </section>
            </div>
          </CSSTransition>
        </SwitchTransition>
      )}
    </div>
  );
};

export default CountryView;
