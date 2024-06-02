import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableRows from "./table-rows";

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
