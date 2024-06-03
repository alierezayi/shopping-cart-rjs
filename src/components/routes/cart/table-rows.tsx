// import { TableCell, TableRow } from "@/components/ui/table";
// import { useCart } from "@/context/cart-context";
// import { shortenText } from "@/lib/helpers";
// import { FaPlus } from "react-icons/fa6";
// import { TbTrash } from "react-icons/tb";
// import { TiMinus } from "react-icons/ti";
// import { Link } from "react-router-dom";

function TableRows() {
  // const [state, dispatch] = useCart();

  return (
    <></>
    // <>
    //   {state.cart.map((item) => (
    //     <TableRow key={item.id}>
    //       {/* product */}
    //       <TableCell className="flex items-center gap-5">
    //         <Link to={`/products/${item.id}`} className="">
    //           <img
    //             src={item.image}
    //             className="aspect-square w-10  md:w-14"
    //             alt={item.title}
    //           />
    //         </Link>
    //         <Link to={`/products/${item.id}`} className="truncate">
    //           {shortenText(item.title)}
    //         </Link>
    //       </TableCell>
    //       {/* category */}
    //       <TableCell className="text-slate-500 hidden md:table-cell">
    //         <Link to={`/products?category=${item.category}`}>
    //           {item.category}
    //         </Link>
    //       </TableCell>
    //       {/* amount */}
    //       <TableCell className="text-xs md:text-sm">{item.price}$</TableCell>
    //       {/* quantity */}
    //       <TableCell>
    //         <div className="flex items-center rounded-md border w-fit">
    //           <button
    //             className="px-2 text-sm"
    //             onClick={() => dispatch({ type: "INCREMENT", payload: item! })}
    //           >
    //             <FaPlus />
    //           </button>
    //           <span className="py-1.5 px-2 border-x text-slate-600">
    //             {item.quantity}
    //           </span>
    //           {item.quantity > 1 ? (
    //             <button
    //               className="px-2 text-sm"
    //               onClick={() =>
    //                 dispatch({ type: "DECREMENT", payload: item! })
    //               }
    //             >
    //               <TiMinus />
    //             </button>
    //           ) : (
    //             <button
    //               className="px-2 text-sm text-red-500"
    //               onClick={() =>
    //                 dispatch({ type: "REMOVE_FROM_CART", payload: item! })
    //               }
    //             >
    //               <TbTrash />
    //             </button>
    //           )}
    //         </div>
    //       </TableCell>
    //     </TableRow>
    //   ))}
    // </>
  );
}

export default TableRows;
