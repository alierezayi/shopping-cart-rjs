import { useEffect, useState } from "react";
import { useQuery } from "@/context/query-context";
import useDebounce from "@/hooks/use-debounce";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

function Search() {
  const [search, setSearch] = useState("");
  const debounedValue = useDebounce(search.trim(), 700);
  const { addQuery } = useQuery();

  useEffect(() => {
    addQuery({ search: debounedValue });
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
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
