// import CartProvider from "@/context/cart-context";
// import ProductsProvider from "@/context/products-context";
import QueryProvider from "@/context/query-context";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <ProductsProvider>
      // <CartProvider> 
        <QueryProvider>
          {children}
        </QueryProvider>
      // </CartProvider>
    // </ProductsProvider>
  );
}

export default Providers;
