import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { createQueryObject, getInitialQuery } from "@/lib/helpers";
import { QueryType } from "@/lib/types";

type QueryContextType = {
  query: QueryType;
  addQuery: (newQuery: QueryType) => void;
  initializeQuery: () => void;
};

type QueryProviderType = {
  children: React.ReactNode;
};

const QueryContext = createContext<QueryContextType | null>(null);

function QueryProvider({ children }: QueryProviderType) {
  const [query, setQuery] = useState<QueryType>({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams(query);
  }, [query]);

  const initializeQuery = () => {
    const query = getInitialQuery(searchParams);
    setQuery(query);
  };

  const addQuery = (newQuery: QueryType) => {
    setQuery((query) => createQueryObject(query, newQuery));
  };

  return (
    <QueryContext.Provider value={{ query, addQuery, initializeQuery }}>
      {children}
    </QueryContext.Provider>
  );
}

export default QueryProvider;

export function useQuery() {
  const context = useContext(QueryContext);

  if (context === null) {
    throw new Error("useQuery must be used within an QueryProvider");
  }

  return context;
}
