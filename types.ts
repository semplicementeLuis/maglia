export interface Product {
  id: number;
  name: string;
  country: string;
  price: string;
  image: string;
}

export interface VotableProduct extends Product {
  votes: number;
  goal: number;
  voted: boolean;
}