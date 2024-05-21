import BasketCard from "@/components/routes/cart/Card";
import { useCart } from "@/context/cart-context";

function CheckoutPage() {
  const [state] = useCart();
  console.log(state);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col divide-y rounded-lg border border-slate-300 divide-slate-300 flex-1">
        {state.cart.map((item) => (
          <BasketCard key={item.id} item={item} />
        ))}
      </div>
      <div className="w-[400px]">checkout</div>
    </div>
  );
}

export default CheckoutPage;
