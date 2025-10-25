export interface Product {
  id: number;
  name: string;
  country: string;
  price: string;
  image: string;
  description: string;
  gallery: string[];
}

export interface VotableProduct extends Product {
  votes: number;
  goal: number;
  voted: boolean;
}