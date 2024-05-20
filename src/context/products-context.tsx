import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductType } from "@/lib/types";
import { getAllProducts } from "@/services/products";

type ProductsContextType = {
  isLoading: boolean;
  products: ProductType[];
  error: string | null;
};

type ProductsProviderType = {
  children: React.ReactNode;
};

const ProductsContext = createContext<ProductsContextType | null>(null);

export default function ProductsProvider({ children }: ProductsProviderType) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { res, error } = await getAllProducts();
      if (error) {
        setError(error.message);
        return;
      }
      if (res) setProducts(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ isLoading, products, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  if (context === null) {
    throw new Error(
      "useProducts must be used within an ProductsProvider"
    );
  }

  return context;
}
