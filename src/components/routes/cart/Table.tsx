import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableRows from "./TableRows";

function CartTable() {
  return (
    <Table>
      <TableCaption>A list of your recent cart items.</TableCaption>
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
