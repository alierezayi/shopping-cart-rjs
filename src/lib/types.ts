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
export type QueryType = {
  search?: string;
  category?: string;
};
