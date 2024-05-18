import ProductsProvider from "@/context/products-context";
import QueryProvider from "@/context/query-context";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProductsProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </ProductsProvider>
  );
}

export default Providers;
