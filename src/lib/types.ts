export type Query = { name: string; value: string };
export type QueryHandler = { queryHandler: (query: Query) => void };
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
