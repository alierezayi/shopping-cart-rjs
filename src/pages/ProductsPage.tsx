import { useProducts } from "@/context/ProductsContext";
import Error from "@/components/global/Error";
import ProductCard from "@/components/template/ProductCard";
import Loader from "@/components/global/Loader";
import Search from "@/components/template/Search";

function ProductsPage() {
  const { isLoading, products, error } = useProducts();

  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="mt-20">
      <Search />
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-500">
          {products.length} products
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grc5 gap-7 mt-6">
        {products.length === 0 && <p>No products found</p>}
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
