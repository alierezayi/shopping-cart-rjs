import { useProducts } from "@/context/ProductsContext";
import { Card } from "../../ui/card";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

function ProductsList() {
  const { isLoading, products, error } = useProducts();

  if (isLoading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error}</h1>;
  if (products.length === 0) return <h1>No products found</h1>;

  return (
    <div>
      <h1>Products List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 mt-20">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
