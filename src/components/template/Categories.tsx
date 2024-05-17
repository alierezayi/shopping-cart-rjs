import { QueryHandlerType } from "@/lib/types";
import { TbCategory } from "react-icons/tb";

const categories = [
  "All",
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];

function Categories({ queryHandler }: QueryHandlerType) {
  const gategoryHandler = (e: any) => {
    queryHandler({ category: e.target.innerText.toLowerCase() });
  };

  return (
    <div className="flex">
      <div className="flex items-center gap-2">
        <TbCategory /> Categories :
      </div>
      <ul className="flex items-center gap-4 ml-4 text-sm overflow-y-auto">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={gategoryHandler}
            className="text-slate-400 hover:text-slate-800 transition duration-300 cursor-pointer"
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
