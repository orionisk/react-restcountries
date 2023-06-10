import axios from 'redaxios';
import { Country } from './types';

const BASE_URL = 'https://restcountries.com/v3.1';
// const BASE_URL = 'https://restcountries-invalidurl.com/v3.1';

export const fetcher = async (url: string) => {
  const countries = (await axios.get<Country[]>(`${BASE_URL}/${url}`)).data;

  countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  const regions: string[] = [];
  for (const c of countries) {
    if (!regions.includes(c.region)) regions.push(c.region);
  }

  return { countries, regions };
};

export const getCountry = async (url: string) => {
  const country = (
    await axios.get<Country>(
      `${BASE_URL}/alpha${url}?fields=name,capital,population,region,subregion,tld,languages,currencies,flags,borders`
    )
  ).data;

  const codes = country.borders.join();
  if (!codes) return { country };

  // const borderings = (
  //   await axios.get<Country[]>(`${BASE_URL}/alpha?codes=${codes}&fields=name,cca3`)
  // ).data?.map(c => c.name.common);

  const borderings = (
    await axios.get<Country[]>(`${BASE_URL}/alpha?codes=${codes}&fields=name,cca3`)
  ).data;

  return { country, borderings };
};
