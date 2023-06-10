import { BsSearch } from 'react-icons/bs';

interface CountriesSearchProps {
  handleSearch: (v: string) => void;
}

const CountriesSearch = ({ handleSearch }: CountriesSearchProps) => {
  return (
    <div className='relative'>
      <BsSearch className='absolute left-3 top-1/2 -translate-y-1/2 lg:left-8' />
      <input
        onChange={e => handleSearch(e.target.value)}
        className='w-full rounded-lg border-transparent bg-white p-4 pl-10 text-sm shadow-md dark:bg-dark-2 lg:pl-20'
        type='text'
        placeholder='Search for a country...'
      />
    </div>
  );
};

export default CountriesSearch;
