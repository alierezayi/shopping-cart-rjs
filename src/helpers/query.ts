import { QueryType } from "@/lib/types";

const createQueryObject = (currentQuery: QueryType, newQuery: QueryType) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...(currentQuery as QueryType), ...(newQuery as QueryType) };
};

export { createQueryObject };
