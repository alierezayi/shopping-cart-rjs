import { ProductType } from "@/lib/types";
import { Link } from "react-router-dom";
import { Card } from "../../ui/card";

function ProductItem({ id, image, title, price }: ProductType) {
  return (
    <div>
      <Link to={`/products/${id}`}>
        <Card className="aspect-square p-10 group">
          <img
            src={image}
            className="w-full h-full group-hover:scale-105 transition-transform duration-200"
          />
        </Card>
      </Link>
      <div className="flex justify-between items-center mt-2 px-0.5">
        <Link
          to={`/products/${id}`}
          className="text-lg font-semibold truncate flex-1"
        >
          {title.split(" ").slice(0, 3).join(" ")}
        </Link>
        <span className="ml-4 text-sm">{price} $</span>
      </div>
    </div>
  );
}

export default ProductItem;
