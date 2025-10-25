import { Product, VotableProduct } from './types';

export const AVAILABLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'T-Shirt Patch: Italia',
    country: 'Italia',
    price: '€ 29,90',
    image: 'https://i.postimg.cc/J471xTgR/italia.png',
  },
  {
    id: 2,
    name: 'T-Shirt Patch: Giappone',
    country: 'Giappone',
    price: '€ 29,90',
    image: 'https://i.postimg.cc/ZKYTHfgZ/giappone.png',
  },
  {
    id: 3,
    name: 'T-Shirt Patch: USA',
    country: 'USA',
    price: '€ 29,90',
    image: 'https://i.postimg.cc/zXDJ7dMh/usa.png',
  },
];

export const VOTABLE_PRODUCTS: VotableProduct[] = [
  {
    id: 4,
    name: 'Prossima Patch: Brasile',
    country: 'Brasile',
    price: '€ 29,90',
    image: 'https://i.postimg.cc/tCRXkrfC/brasile.png',
    votes: 109,
    goal: 500,
    voted: false,
  },
  {
    id: 5,
    name: 'Prossima Patch: Canada',
    country: 'Canada',
    price: '€ 29,90',
    image: 'https://i.postimg.cc/NfGgDNVg/canada.png',
    votes: 25,
    goal: 500,
    voted: false,
  },
  {
    id: 6,
    name: 'Prossima Patch: Australia',
    country: 'Australia',
    price: '€ 29,90',
    image: 'https://i.postimg.cc/050kpgtx/australia.png',
    votes: 2,
    goal: 500,
    voted: false,
  },
];