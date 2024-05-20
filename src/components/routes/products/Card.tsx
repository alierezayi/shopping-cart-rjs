import { Link } from "react-router-dom";
import { Card } from "../../ui/card";
import { ProductType } from "@/lib/types";
import { shortenText } from "@/lib/helpers";
import { useCart } from "@/context/cart-context";

function ProductCard({ item }: { item: ProductType }) {
  const { id, image, title, price } = item;
  const [state, dispatch] = useCart();

  return (
    <div>
      <Link to={`/products/${id}`}>
        <Card className="aspect-square p-10 group">
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
        <span
          className="ml-4 text-sm"
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
        >
          {price} $
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
