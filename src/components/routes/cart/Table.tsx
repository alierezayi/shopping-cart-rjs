import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { AppDispatch, RootState } from "@/app/store";
import { decrease, increase, removeItem } from "@/features/cart/cartSlice";
import { shortenText } from "@/lib/helpers";
import { FaPlus } from "react-icons/fa6";
import { TbTrash } from "react-icons/tb";
import { TiMinus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TableRows() {
  const state = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      {state.cart.map((item) => (
        <TableRow key={item.id}>
          {/* product */}
          <TableCell className="flex items-center gap-5">
            <Link to={`/products/${item.id}`} className="">
              <img
                src={item.image}
                className="aspect-square w-10  md:w-14"
                alt={item.title}
              />
            </Link>
            <Link to={`/products/${item.id}`} className="truncate">
              {shortenText(item.title)}
            </Link>
          </TableCell>
          {/* category */}
          <TableCell className="text-slate-500 hidden md:table-cell">
            <Link to={`/products?category=${item.category}`}>
              {item.category}
            </Link>
          </TableCell>
          {/* amount */}
          <TableCell className="text-xs md:text-sm">{item.price}$</TableCell>
          {/* quantity */}
          <TableCell>
            <div className="flex items-center rounded-md border w-fit">
              <button
                className="px-2 text-sm"
                onClick={() => dispatch(increase(item))}
              >
                <FaPlus />
              </button>
              <span className="py-1.5 px-2 border-x text-slate-600">
                {item.quantity}
              </span>
              {item.quantity > 1 ? (
                <button
                  className="px-2 text-sm"
                  onClick={() => dispatch(decrease(item))}
                >
                  <TiMinus />
                </button>
              ) : (
                <button
                  className="px-2 text-sm text-red-500"
                  onClick={() => dispatch(removeItem(item))}
                >
                  <TbTrash />
                </button>
              )}
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

function CartTable() {
  return (
    <Table className="flex-1">
      {/* header */}
      <TableHeader>
        <TableRow className="text-xs md:text-sm">
          <TableHead className="min-w-[200px]">Product</TableHead>
          <TableHead className="hidden md:table-cell">Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-center md:text-start">Quantity</TableHead>
        </TableRow>
      </TableHeader>
      {/* body */}
      <TableBody>
        <TableRows />
      </TableBody>
    </Table>
  );
}

export default CartTable;
