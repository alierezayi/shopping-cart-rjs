import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { QueryType } from "@/lib/types";
import { createQueryObject } from "@/helpers/query";

type QueryContextType = {
  query: QueryType;
  updateQuery: (newQuery: QueryType) => void;
};

type QueryProviderType = {
  children: React.ReactNode;
};

const QueryContext = createContext<QueryContextType | null>(null);

function QueryProvider({ children }: QueryProviderType) {
  const [query, setQuery] = useState<QueryType>({});
  const [searchParams, setSearchParams] = useSearchParams();

  // set query to url
  useEffect(() => {
    setSearchParams(query);
  }, [query]);

  // get initial query
  useEffect(() => {
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    if (category) {
      setQuery((query) => ({ ...query, category }));
    }
    if (search) {
      setQuery((query) => ({ ...query, search }));
    }
  }, []);

  // update query
  const updateQuery = (newQuery: QueryType) => {
    setQuery((query) => createQueryObject(query, newQuery));
  };

  return (
    <QueryContext.Provider value={{ query, updateQuery }}>
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
