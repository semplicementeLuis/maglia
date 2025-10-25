import { Product, VotableProduct } from './types';

export const AVAILABLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'T-Shirt Patch: Italia',
    country: 'Italia',
    price: '€ 29,90',
    image: 'https://i.postimg.cc/hPfBx89p/Gemini-Generated-Image-44sey944sey944se.png',
    description: 'Celebra la cultura e lo stile italiano con questa T-shirt premium. Realizzata in cotone 100%, presenta una patch finemente ricamata della bandiera italiana sul cuore. Vestibilità classica per un comfort che dura tutto il giorno.',
    gallery: [
      'https://i.postimg.cc/hPfBx89p/Gemini-Generated-Image-44sey944sey944se.png',
      'https://i.postimg.cc/Y0NHyZzQ/tshirt-details-1.png',
      'https://i.postimg.cc/P5tM0G3g/tshirt-details-2.png',
    ],
  },
  {
    id: 2,
    name: 'T-Shirt Patch: Giappone',
    country: 'Giappone',
    price: '€ 29,90',
    image: 'https://i.postimg.cc/L6npfkzC/Gemini-Generated-Image-fxfkfvfxfkfvfxfk.png',
    description: 'Immergiti nell\'eleganza minimalista del Giappone. Questa T-shirt in cotone di alta qualità è adornata con la patch del Sol Levante, simbolo di tradizione e modernità. Perfetta per un look sofisticato e di tendenza.',
     gallery: [
      'https://i.postimg.cc/L6npfkzC/Gemini-Generated-Image-fxfkfvfxfkfvfxfk.png',
      'https://i.postimg.cc/Y0NHyZzQ/tshirt-details-1.png',
      'https://i.postimg.cc/P5tM0G3g/tshirt-details-2.png',
    ],
  },
  {
    id: 3,
    name: 'T-Shirt Patch: USA',
    country: 'USA',
    price: '€ 29,90',
    image: 'https://i.postimg.cc/j2kYmCrk/Gemini-Generated-Image-fxfkfvfxfkfvfxfk-1.png',
    description: 'Indossa lo spirito audace e intramontabile degli Stati Uniti. La patch "Stars and Stripes" è ricamata su una T-shirt in cotone morbido e resistente, ideale per un look casual e iconico. Un classico che non passa mai di moda.',
     gallery: [
      'https://i.postimg.cc/j2kYmCrk/Gemini-Generated-Image-fxfkfvfxfkfvfxfk-1.png',
      'https://i.postimg.cc/Y0NHyZzQ/tshirt-details-1.png',
      'https://i.postimg.cc/P5tM0G3g/tshirt-details-2.png',
    ],
  },
];

export const VOTABLE_PRODUCTS: VotableProduct[] = [
  {
    id: 4,
    name: 'Prossima Patch: Brasile',
    country: 'Brasile',
    price: '€ 29,90',
    image: 'https://i.postimg.cc/MK8LZy90/Gemini-Generated-Image-u4e581u4e581u4e5.png',
    votes: 109,
    goal: 500,
    voted: false,
    description: '',
    gallery: [],
  },
  {
    id: 5,
    name: 'Prossima Patch: Canada',
    country: 'Canada',
    price: '€ 29,90',
    image: 'https://i.postimg.cc/gkP7cvgV/Gemini-Generated-Image-2gq18x2gq18x2gq1.png',
    votes: 25,
    goal: 500,
    voted: false,
    description: '',
    gallery: [],
  },
  {
    id: 6,
    name: 'Prossima Patch: Australia',
    country: 'Australia',
    price: '€ 29,90',
    image: 'https://i.postimg.cc/m2GnZQm7/Gemini-Generated-Image-zb2do6zb2do6zb2d.png',
    votes: 2,
    goal: 500,
    voted: false,
    description: '',
    gallery: [],
  },
];