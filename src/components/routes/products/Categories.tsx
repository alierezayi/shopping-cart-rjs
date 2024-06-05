import { useQuery } from "@/context/query-context";
import { twMerge } from "tailwind-merge";

const categories = [
  "All",
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];

function Categories() {
  const { query, updateQuery } = useQuery();

  const gategoryHandler = (e: any) => {
    updateQuery({ category: e.target.innerText.toLowerCase() });
  };

  return (
    <ul className="md:flex items-center gap-4 text-sm overflow-y-auto hidden">
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
  );
}

export default Categories;
