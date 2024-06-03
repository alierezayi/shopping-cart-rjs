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

const getInitialQuery = (searchParams: any) => {
  const query: QueryType = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query["category"] = category;
  if (search) query["search"] = search;
  return query as QueryType;
};

export { createQueryObject, getInitialQuery };
