import useDebounce from "@/hooks/useDebounce";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { QueryHandler } from "@/lib/types";

function Search({ queryHandler }: QueryHandler) {
  const [search, setSearch] = useState("");
  const debounedValue = useDebounce(search, 500);
  useEffect(() => {
    queryHandler({ name: "search", value: debounedValue });
  }, [debounedValue]);

  return (
    <div>
      <div className="border w-full sm:max-w-[350px] rounded-md flex py-0.5 pl-2 items-center">
        <SearchIcon className="w-4 h-4 text-slate-400 -mb-0.5" />
        <Input
          type="search"
          placeholder="search products . . ."
          className="flex-1 h-full border-none"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
      </div>
    </div>
  );
}

export default Search;
