// import CartProvider from "@/context/cart-context";
// import ProductsProvider from "@/context/products-context";
import { Provider as ReduxProvider } from "react-redux";
import QueryProvider from "@/context/query-context";
import store from "@/app/store";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <ProductsProvider>
    // <CartProvider>
    <ReduxProvider store={store}>
      <QueryProvider>{children}</QueryProvider>
    </ReduxProvider>
    // </CartProvider>
    // </ProductsProvider>
  );
}

export default Providers;
