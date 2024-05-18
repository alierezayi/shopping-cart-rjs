import { useQuery } from "@/context/query-context";
import { TbCategory } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

const categories = [
  "All",
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];

function Categories() {
  const { query, addQuery } = useQuery();

  const gategoryHandler = (e: any) => {
    addQuery({ category: e.target.innerText.toLowerCase() });
  };

  return (
    <div className="flex">
      <div className="flex items-center gap-2">
        <TbCategory className="-mb-0.5" /> Categories :
      </div>
      <ul className="flex items-center gap-4 ml-4 text-sm overflow-y-auto">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={gategoryHandler}
            className={twMerge(
              "text-slate-400 hover:text-slate-800 transition duration-300 cursor-pointer",
              !query.category && cat === "All" && "text-slate-800",
              query?.category === cat.toLowerCase() && "text-slate-800"
            )}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
