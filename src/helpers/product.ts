import { ProductType } from "@/lib/types";

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

export { searchProducts, filterProducts };
