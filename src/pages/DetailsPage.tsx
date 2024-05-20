import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { IMAGES } from "@/constants/images";
import { MESSAGES } from "@/constants/toastMessages";
import Error from "@/containers/global/Error";
import Loader from "@/containers/global/Loader";
import { useCart } from "@/context/cart-context";
import { ProductType } from "@/lib/types";
import { getProductDetails } from "@/services/products";
import { useEffect, useState } from "react";
import { HiOutlineTag } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";

function DetailsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [error, setError] = useState("");
  const { id } = useParams();
  const [state, dispatch] = useCart();
  console.log(state);

  useEffect(() => {
    const fetchData = async () => {
      const { res, error } = await getProductDetails(id);
      if (error) setError(error.message);
      if (res) setProduct(res?.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  console.log(product);

  

  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="flex flex-col lg:flex-row gap-20">
      <Card className="p-10 mx-auto shadow-sm">
        <img src={product?.image} alt="" className="w-[350px] h-[350px]" />
      </Card>
      <div className="flex-1 flex flex-col min-h-[431.6px]">
        <CardTitle className="mb-7 border-b pb-4">{product?.title}</CardTitle>
        <CardDescription className="text-wrap max-w-[650px]">
          {product?.description}
        </CardDescription>
        <Link to="/" className="flex items-center mt-3 mb-10 underline">
          <HiOutlineTag className="text-lg -mb-0.5" />
          <span className="ml-2 text-sm font-medium">{product?.category}</span>
        </Link>
        <div className="mt-auto">
          <div className="mb-7 text-xl">{product?.price} $</div>
          <Button className="w-full sm:w-[300px]">
            Add to cart
          </Button>
          <div className="flex mt-4">
            <span className="inline-flex gap-1">
              <img
                src={IMAGES.routes.detailsPage.star}
                className="w-4"
                alt="star"
              />
              {product?.rating.rate}
              <span className="text-slate-400">
                (rate of {product?.rating.count} buyers)
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
