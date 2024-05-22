import Sidebar from "@/components/routes/cart/Sidebar";
import CartTable from "@/components/routes/cart/Table";
import { useCart } from "@/context/cart-context";

function CheckoutPage() {
  const [state] = useCart();
  console.log(state);

  if (state.cart.length === 0) {
    return <div>cart is empty 😓</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <CartTable />
      <Sidebar />
    </div>
  );
}

export default CheckoutPage;
