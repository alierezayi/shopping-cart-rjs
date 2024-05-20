import { useEffect, useState } from "react";
import { useProducts } from "@/context/products-context";
import { useQuery } from "@/context/query-context";
import { filterProducts, searchProducts } from "@/lib/helpers";
import Error from "@/components/global/Error";
import ProductCard from "@/components/template/ProductCard";
import Loader from "@/components/global/Loader";
import Search from "@/components/template/Search";
import Categories from "@/components/template/Categories";
import { ProductType } from "@/lib/types";

function ProductsPage() {
  const [displayed, setDisplayed] = useState<ProductType[]>([]);
  const { isLoading, products, error } = useProducts();
  const { query, initializeQuery } = useQuery();

  useEffect(() => {
    setDisplayed(products);
    initializeQuery();
  }, [products]);

  useEffect(() => {
    // filter products
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="mt-20">
      <Search />
      <div className="flex justify-between items-center mt-5 overflow-x-auto">
        <Categories />
        <span className="text-sm text-slate-400 hidden md:block">
          {displayed.length} products
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:grc5 gap-7 mt-6">
        {!displayed.length && <p>No product found 😓</p>}
        {displayed.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
