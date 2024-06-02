import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { useCart } from "@/context/cart-context";
import { GoChecklist } from "react-icons/go";
import { LuCheckCircle } from "react-icons/lu";
import { TbListNumbers } from "react-icons/tb";

function OrderSummeryCard() {
  const [state, dispatch] = useCart();
  console.log(state);

  return (
    <Card className="md:w-[400px] h-fit p-5">
      <CardTitle className="text-xl">Order summary</CardTitle>
      <div className="my-8 divide-y">
        <div className="flex items-center justify-between py-3">
          <span className="flex items-center gap-2">
            <GoChecklist />
            Total price:
          </span>
          <span className="text-sm font-medium">{state.total} $</span>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="flex items-center gap-2">
            <TbListNumbers />
            Total items:
          </span>
          <span className="text-sm font-medium">{state.counter}</span>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="flex items-center gap-2">
            <LuCheckCircle />
            Status:
          </span>
          <span className="text-sm font-medium">
            {state.checkout ? "paied" : "pending . . ."}
          </span>
        </div>
      </div>
      <Button className="w-full" onClick={() => dispatch({ type: "CHECKOUT" })}>
        Checkout
      </Button>
    </Card>
  );
}

export default OrderSummeryCard;
