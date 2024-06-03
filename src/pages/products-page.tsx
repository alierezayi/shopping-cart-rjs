import { useEffect, useState } from "react";
// import { useProducts } from "@/context/products-context";
import { useQuery } from "@/context/query-context";
import { filterProducts, searchProducts } from "@/helpers/product";
// import Error from "@/containers/global/error";
import { ProductType } from "@/lib/types";
import { Tabs } from "@/components/ui/tabs";
import Categories from "@/components/routes/products/categories";
import Grid from "@/components/routes/products/grid";
import List from "@/components/routes/products/list";
import TabsSwitch from "@/components/routes/products/tabs";
import Search from "@/components/routes/products/search";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/features/product/productSlice";
import { AppDispatch, RootState } from "@/app/store";
import Error from "@/containers/global/error";

function ProductsPage() {
  const [displayed, setDisplayed] = useState<ProductType[]>([]);
  const { products, isLoading, error } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch<AppDispatch>();
  const { query, initializeQuery } = useQuery();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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

  if (error) return <Error message={error} />;

  return (
    <Tabs defaultValue="grid">
      <Search />
      <div className="flex justify-between items-center mt-5 overflow-x-auto">
        <div className="flex items-center gap-10">
          <TabsSwitch />
          <Categories />
        </div>
        <span className="text-sm text-slate-400 hidden md:block">
          {displayed.length} products
        </span>
      </div>
      <Grid products={displayed} isLoading={isLoading} />
      <List products={displayed} />
    </Tabs>
  );
}

export default ProductsPage;
