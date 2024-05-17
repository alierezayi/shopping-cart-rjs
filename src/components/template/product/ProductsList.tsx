import { useProducts } from "@/context/ProductsContext";
import ProductItem from "./ProductItem";
import Loader from "@/components/global/Loader";
import Error from "@/components/global/Error";

function ProductsList() {
  const { isLoading, products, error } = useProducts();

  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <h1 className="text-xl font-semibold">Products List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-16 mt-10">
        {products.length === 0 && <p>No products found</p>}
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
