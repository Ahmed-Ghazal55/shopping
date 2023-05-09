export interface Review {
  id?: number;
  userId?: number;
  userName: string;
  userImage?: string;
  date?: string;
  rating: number;
  comment: string;
  email: string;
}

export interface Product {
  id?: number;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  colors: string[];
  sizes: string[];
  price: number;
  rate: number;
  reviews: Review[];
}

export interface Card {
  id?: number;
  coverImg: string;
  title: string;
  price: number;
  rate: number;
}
