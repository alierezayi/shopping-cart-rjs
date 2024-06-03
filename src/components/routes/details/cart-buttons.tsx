import { useCart } from "@/context/cart-context";
import { productQuantity } from "@/lib/helpers";
import { ProductType } from "@/lib/types";
import { Button } from "../../ui/button";
import { TiMinus } from "react-icons/ti";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { MESSAGES } from "@/constants/toast";
import { toast } from "@/lib/utils";

function CartButtons({ product, id }: { product: ProductType; id: string }) {
  const [state, dispatch] = useCart();
  const quantity = productQuantity(state, product?.id!);
  const inCart = state.cart.find((item) => item.id === +id!);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product! });
    toast(MESSAGES.cart.addToCart);
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product! });
    toast(MESSAGES.cart.removeFromCart);
  };

  return (
    <div className="w-full sm:w-[300px]">
      {!inCart ? (
        <Button className="w-full" onClick={addToCart}>
          Add to cart
        </Button>
      ) : (
        <div className="flex gap-5 items-center">
          {quantity > 1 ? (
            <Button variant="secondary">
              <TiMinus
                onClick={() =>
                  dispatch({ type: "DECREMENT", payload: product! })
                }
              />
            </Button>
          ) : (
            <Button onClick={removeFromCart}>
              <FaRegTrashCan />
            </Button>
          )}
          <span className="text-lg">{quantity}</span>
          <Button variant="secondary">
            <FaPlus
              onClick={() => dispatch({ type: "INCREMENT", payload: product! })}
            />
          </Button>
        </div>
      )}
    </div>
  );
}

export default CartButtons;
