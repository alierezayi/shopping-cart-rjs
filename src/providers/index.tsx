import { Provider as ReduxProvider } from "react-redux";
import QueryProvider from "@/context/query-context";
import store from "@/app/store";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <QueryProvider>{children}</QueryProvider>
    </ReduxProvider>
  );
}

export default Providers;
