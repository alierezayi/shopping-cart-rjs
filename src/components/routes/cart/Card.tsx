import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { shortenText } from "@/lib/helpers";
import { CartItemType } from "@/lib/types";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

function BasketCard({ item }: { item: CartItemType }) {
  const { id, title, price, image, quantity, category } = item;
  const [state, dispatch] = useCart();
  console.log(state);

  return (
    <div className="flex items-center p-5 flex-col justify-center md:flex-row gap-7 md:gap-0 py-10 md:py-5">
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-[110px] aspect-square"
        />
      </Link>
      <div className="md:ml-10 h-full flex flex-col w-full items-center md:items-start md:w-auto">
        <Link to={`/products/${id}`} className="">
          {shortenText(title)}
        </Link>
        <Link
          to={`/products?category=${category}`}
          className="text-slate-500 text-sm mb-5"
        >
          {category}
        </Link>
        <span className="mt-auto text-sm">{price} $</span>
      </div>
      <div className="md:ml-auto h-full flex flex-row md:flex-col items-center gap-2">
        <Button
          variant="secondary"
          className="py-0"
          onClick={() => dispatch({ type: "INCREMENT", payload: item! })}
        >
          <IoIosArrowUp className="text-xl" />
        </Button>
        <span className="">( {quantity} )</span>
        {quantity > 1 ? (
          <Button
            variant="secondary"
            className="py-2"
            onClick={() => dispatch({ type: "DECREMENT", payload: item! })}
          >
            <IoIosArrowDown className="text-xl" />
          </Button>
        ) : (
          <Button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item! })
            }
          >
            <FaRegTrashCan />
          </Button>
        )}
      </div>
    </div>
  );
}

export default BasketCard;
