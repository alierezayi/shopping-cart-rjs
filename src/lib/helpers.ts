import { CartItemType, CartStateType, ProductType, QueryType } from "./types";

const shortenText = (text: string, maxLength: number = 3) => {
  if (text.length > maxLength) {
    return text.split(" ").slice(0, maxLength).join(" ");
  }
  return text as string;
};

const searchProducts = (
  products: ProductType[],
  searchTerm: string | undefined
) => {
  if (!searchTerm) return products;
  const searchProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm?.toLowerCase().trim())
  );
  return searchProducts as ProductType[];
};

const filterProducts = (
  products: ProductType[],
  category: string | undefined
) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts as ProductType[];
};

const createQueryObject = (currentQuery: QueryType, newQuery: QueryType) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...(currentQuery as QueryType), ...(newQuery as QueryType) };
};

const getInitialQuery = (searchParams: any) => {
  const query: QueryType = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query["category"] = category;
  if (search) query["search"] = search;
  return query as QueryType;
};

const sumProducts = (items: CartItemType[]) => {
  const counter = items.reduce(
    (counter, product) => counter + (product.quantity ?? 0),
    0
  );
  const total = items
    .reduce(
      (total, product) => total + product.price * (product.quantity ?? 0),
      0
    )
    .toFixed(2);
  return { counter, total } as { counter: number; total: number | string };
};

const productQuantity = (state: CartStateType, id: number) => {
  const index = state.cart.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.cart[index].quantity as number;
  }
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  sumProducts,
  productQuantity,
};
