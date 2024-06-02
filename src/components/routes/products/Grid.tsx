import { TabsContent } from "@/components/ui/tabs";
import ProductCard from "./Card";
import { ProductType } from "@/lib/types";
import { useProducts } from "@/context/products-context";
import SkeletonProducts from "@/components/template/skeletons/product";

function Grid({ products }: { products: ProductType[] }) {
  const { isLoading } = useProducts();
  return (
    <TabsContent value="grid">
      {isLoading ? (
        <SkeletonProducts />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:grc5 gap-7 mt-6">
          {!products.length && <p>No product found 😓</p>}
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
      )}
    </TabsContent>
  );
}

export default Grid;
