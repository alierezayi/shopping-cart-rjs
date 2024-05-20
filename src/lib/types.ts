export type ProductType = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number;
};

export type QueryType = {
  search?: string;
  category?: string;
};

export type CartStateType = {
  cart: CartItemType[];
  counter: number;
  total: number | string;
  checkout: boolean;
};