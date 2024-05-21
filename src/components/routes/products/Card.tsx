import { Link } from "react-router-dom";
import { Card } from "../../ui/card";
import { ProductType } from "@/lib/types";
import { shortenText } from "@/lib/helpers";

function ProductCard({ item }: { item: ProductType }) {
  const { id, image, title, price } = item;

  return (
    <div>
      <Link to={`/products/${id}`}>
        <Card className="aspect-square md:p-10 p-5 group">
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

export default ProductCard;
