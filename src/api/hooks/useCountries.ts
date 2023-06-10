import useSWR from 'swr';
import { fetcher } from '../api';

export const useCountries = () =>
  useSWR('/all?fields=name,flags,region,population,capital,cca3', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
