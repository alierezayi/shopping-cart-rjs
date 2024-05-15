import { useProductsContext } from "@/context/ProductsContext";

function ProductsPage() {
  const context = useProductsContext();
  console.log(context);

  return <div>ProductsPage</div>;
}

export default ProductsPage;
