import useSWR from 'swr';
import { getCountry } from '../api';

export const useCountry = (cca3: string | undefined) => {
  return useSWR(cca3 ? `/${cca3}` : null, getCountry, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
};
