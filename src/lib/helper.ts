import { ProductType, QueryType } from "./types";

const shortenText = (text: string, maxLength: number = 3) => {
  if (text.length > maxLength) {
    return text.split(" ").slice(0, maxLength).join(" ");
  }
  return text;
};

const searchProducts = (products: ProductType[], searchTerm: string) => {
  if (searchTerm.trim() === "") return products;
  const searchProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );
  return searchProducts;
};

const filterProducts = (
  products: ProductType[],
  category: string | undefined
) => {
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

// const createQueryObject = (query: string) => {
//   const queryObject: { [key: string]: string } = {};
//   const queryArray = query.split("&");
//   queryArray.forEach((item) => {
//     const [key, value] = item.split("=");
//     queryObject[key] = value;
//   });
//   return queryObject;
// };

export { shortenText, searchProducts, filterProducts, createQueryObject };
