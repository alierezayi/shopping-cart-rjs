import { TabsContent } from "@/components/ui/tabs";
import { ProductType } from "@/lib/types";

function List({}: { products: ProductType[] }) {
  return (
    <TabsContent value="list">
      <h1>products list</h1>
    </TabsContent>
  );
}

export default List;
