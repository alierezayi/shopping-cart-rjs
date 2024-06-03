// import { useCart } from "@/context/cart-context";
import { productQuantity } from "@/lib/helpers";
import { Button } from "../../ui/button";
import { TiMinus } from "react-icons/ti";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { MESSAGES } from "@/constants/toast";
import { toast } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "@/features/cart/cartSlice";
import { ProductType } from "@/lib/types";

function CartButtons({ item }: { item: ProductType }) {
  const state = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const quantity = productQuantity(state, item.id!);
  const inCart = state.cart.find((i) => i.id === item.id!);

  const addToCart = () => {
    dispatch(addItem(item));
    toast(MESSAGES.cart.addToCart);
  };

  const removeFromCart = () => {
    dispatch(removeItem(item));
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
              <TiMinus onClick={() => dispatch(decrease(item))} />
            </Button>
          ) : (
            <Button onClick={removeFromCart}>
              <FaRegTrashCan />
            </Button>
          )}
          <span className="text-lg">{quantity}</span>
          <Button variant="secondary">
            <FaPlus onClick={() => dispatch(increase(item))} />
          </Button>
        </div>
      )}
    </div>
  );
}

export default CartButtons;
