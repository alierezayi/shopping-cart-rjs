import useDebounce from "@/hooks/useDebounce";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const debounedValue = useDebounce(search, 500);

  useEffect(() => {
    if (debounedValue) {
      console.log(debounedValue);
    }
  }, [debounedValue]);

  return (
    <div>
      <div className="border w-full max-w-[300px] rounded-md flex p-2 gap-2 items-center">
        <SearchIcon className="w-4 h-4 text-slate-400" />
        <input
          type="search"
          placeholder="search products . . ."
          className="flex-1 h-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
      </div>
    </div>
  );
}

export default Search;
