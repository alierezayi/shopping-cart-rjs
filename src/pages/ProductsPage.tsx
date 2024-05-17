import { useProducts } from "@/context/ProductsContext";
import Error from "@/components/global/Error";
import ProductCard from "@/components/template/ProductCard";
import Loader from "@/components/global/Loader";
import Search from "@/components/template/Search";
import Categories from "@/components/template/Categories";
import { useEffect, useState } from "react";
import { ProductType, QueryType } from "@/lib/types";
import {
  createQueryObject,
  filterProducts,
  searchProducts,
} from "@/lib/helper";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const { isLoading, products, error } = useProducts();
  const [displayed, setDisplayed] = useState<ProductType[]>([]);
  const [query, setQuery] = useState<QueryType>({});
  const [searchParams, setSearchParams] = useSearchParams();

  console.log();

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    const searchText = query.search ? query.search : "";
    let finalProducts = searchProducts(products, searchText);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  const queryHandler = (newQuery: QueryType) => {
    setQuery((query) => createQueryObject(query, newQuery));
  };

  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="mt-20">
      <Search queryHandler={queryHandler} />
      <div className="flex justify-between items-center mt-5 overflow-x-auto">
        <Categories queryHandler={queryHandler} />
        <span className="text-sm text-slate-500 hidden md:block">
          {displayed.length} products
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:grc5 gap-7 mt-6">
        {!displayed.length && <p>No product found</p>}
        {displayed.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
