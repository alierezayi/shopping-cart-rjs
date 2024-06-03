import { TabsContent } from "@/components/ui/tabs";
import { ProductType } from "@/lib/types";
// import { useProducts } from "@/context/products-context";
import SkeletonProducts from "@/components/template/skeletons/product";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { shortenText } from "@/lib/helpers";

function ProductCard({ item }: { item: ProductType }) {
  const { id, image, title, price } = item;

  return (
    <div>
      <Link to={`/products/${id}`}>
        <Card className="aspect-square md:p-8 p-5 group">
          <img
            src={image}
            className="w-full h-full group-hover:scale-105 transition duration-500"
          />
        </Card>
      </Link>
      <div className="flex justify-between items-center mt-2.5 px-0.5">
        <Link
          to={`/products/${id}`}
          className="font-semibold text-sm truncate flex-1"
        >
          {shortenText(title)}
        </Link>
        <span className="ml-4 text-sm">{price} $</span>
      </div>
    </div>
  );
}

function Grid({ products }: { products: ProductType[] }) {
  // const { isLoading } = useProducts();
  const isLoading = true;
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
