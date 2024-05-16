import ProductsList from "@/components/template/product/ProductsList";
import Sidebar from "@/components/template/Sidebar";

function ProductsPage() {
  return (
    <div className="flex">
      <ProductsList />
      <Sidebar />
    </div>
  );
}

export default ProductsPage;
