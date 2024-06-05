import { Provider as ReduxProvider } from "react-redux";
import QueryProvider from "@/context/query-context";
import store from "@/app/store";
import ErrorProvider from "@/context/error-context";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ErrorProvider>
        <QueryProvider>
          {children}
        </QueryProvider>
      </ErrorProvider>
    </ReduxProvider>
  );
}

export default Providers;
