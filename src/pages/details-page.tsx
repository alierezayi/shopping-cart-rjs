import CartButtons from "@/components/routes/details/cart-buttons";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { IMAGES } from "@/constants/images";
import Error from "@/containers/global/error";
import Loader from "@/containers/global/loader";
import { ProductType } from "@/lib/types";
import { getProductDetails } from "@/services/products";
import { useEffect, useState } from "react";
import { MdTag } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

function DetailsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { res, error } = await getProductDetails(id);
      if (error) setError(error.message);
      if (res) setProduct(res?.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="flex flex-col lg:flex-row gap-20">
      {/* image */}
      <Card className="md:p-10 p-5 mx-auto shadow-sm">
        <img src={product?.image} alt="" className="w-[350px] h-[350px]" />
      </Card>
      <div className="flex-1 flex flex-col min-h-[431.6px]">
        {/* title */}
        <CardTitle className="border-b pb-8">{product?.title}</CardTitle>
        {/* category */}
        <Link
          to={`/products?category=${product?.category}`}
          className="flex items-center mt-2 w-fit pb-1 rounded-md font-medium"
        >
          <MdTag className="-mb-1 mr-1" />
          {product?.category}
        </Link>
        {/* description */}
        <CardDescription className="text-wrap leading-normal my-4 max-w-[650 px]">
          {product?.description}
        </CardDescription>
        <div className="mt-auto">
          {/* price */}
          <div className="mb-5 text-xl">{product?.price} $</div>
          {/* buttons */}
          <CartButtons item={product!} />
          {/* rating */}
          <div className="flex items-center gap-1 mt-4">
            <img
              src={IMAGES.routes.detailsPage.star}
              className="w-4"
              alt="star"
            />
            {product?.rating.rate}
            <span className="text-slate-400 text-sm">
              (rate of {product?.rating.count} buyers)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
