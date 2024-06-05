import ErrorContainer from "@/containers/global/error";
import { createContext, useContext, useState } from "react";

type ErrorContextType = {
  error: string | null;
  handleError: (error: string) => void;
};

const ErrorContext = createContext<ErrorContextType | null>(null);

const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<string>("");

  const handleError = (error: string) => {
    setError(error);
  };
  return (
    <ErrorContext.Provider value={{ error, handleError }}>
      {error ? <ErrorContainer message={error} /> : children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;

export function useError() {
  const context = useContext(ErrorContext);

  if (context === null) {
    throw new Error("useError must be used within an ErrorProvider");
  }

  return context;
}
