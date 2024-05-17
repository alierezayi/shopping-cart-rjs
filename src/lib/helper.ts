import { ProductType } from "./types";

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

export { shortenText, searchProducts };
