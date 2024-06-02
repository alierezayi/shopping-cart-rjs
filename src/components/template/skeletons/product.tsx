import { Skeleton } from "@/components/ui/skeleton";

function SkeletonProduct() {
  return (
    <div className="flex flex-col gap-2.5">
      {/* image */}
      <Skeleton className="aspect-square rounded-lg bg-gray-100" />
      {/* title */}
      <Skeleton className="h-[20px] rounded-sm bg-gray-100" />
    </div>
  );
}

const SkeletonProducts = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:grc5 gap-7 mt-6">
      {new Array(10).fill(0).map((_, i) => (
        <SkeletonProduct key={i} />
      ))}
    </div>
  );
};

export default SkeletonProducts;
