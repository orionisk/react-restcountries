import { CountriesCardProps } from '@/api/types';

const CountriesCard = (props: CountriesCardProps) => {
  const { capital, name, flags, population, region } = props;

  return (
    <div className='h-[324px] w-64 overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-4 dark:bg-dark-2'>
      <div className='h-40'>
        <img src={flags.png} alt={flags.alt} className='h-full w-full' loading='lazy' />
      </div>
      <div className='p-4 text-sm'>
        <h2 className='text-xl font-bold leading-tight'>{name.common}</h2>
        <div className='mt-4 leading-relaxed'>
          <div>
            <b className='font-semibold'>Population:</b> {population}
          </div>
          <div>
            <b className='font-semibold'>Region:</b> {region}
          </div>
          <div>
            <b className='font-semibold'>Capital:</b> {capital}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesCard;
