import { HiOutlineViewGrid } from "react-icons/hi";
import { TabsList, TabsTrigger } from "../../ui/tabs";
import { TbList } from "react-icons/tb";

function TabsSwitch() {
  return (
    <TabsList>
      <TabsTrigger value="grid">
        <HiOutlineViewGrid className="text-lg" />
      </TabsTrigger>
      <TabsTrigger value="list">
        <TbList className="text-lg" />
      </TabsTrigger>
    </TabsList>
  );
}

export default TabsSwitch;
