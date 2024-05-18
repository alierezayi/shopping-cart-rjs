import { ProductType, QueryType } from "./types";

const shortenText = (text: string, maxLength: number = 3) => {
  if (text.length > maxLength) {
    return text.split(" ").slice(0, maxLength).join(" ");
  }
  return text;
};

const searchProducts = (products: ProductType[], searchTerm: string | undefined) => {
  if (!searchTerm) return products;
  const searchProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm?.toLowerCase().trim())
  );
  return searchProducts;
};

const filterProducts = (products: ProductType[], category: string | undefined) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
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
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams: any) => {
  const query: QueryType = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query["category"] = category;
  if (search) query["search"] = search;
  return query;
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
};
