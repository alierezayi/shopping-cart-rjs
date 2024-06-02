import OrderSummeryCard from "@/components/routes/cart/order-summery";
import CartTable from "@/components/routes/cart/table";
import { useCart } from "@/context/cart-context";

function CheckoutPage() {
  const [state] = useCart();
  console.log(state);

  if (state.cart.length === 0) {
    return <div>cart is empty 😓</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <CartTable />
      <OrderSummeryCard />
    </div>
  );
}

export default CheckoutPage;
