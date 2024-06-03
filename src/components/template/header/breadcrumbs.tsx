import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

function Breadcrumbs() {
  const { products } = useSelector((state: RootState) => state.product);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const idNameMap = () => {
    if (pathnames[0] === "products" && pathnames.length > 1) {
      const id = pathnames[pathnames.length - 1];
      const findedItem = products.find((item) => item.id === +id);

      return {
        [id]: findedItem?.title!,
      };
    }
  };

  const routeNameMap: any = {
    products: "Products",
    checkout: "Checkout",
    ...idNameMap(),
  };

  return (
    <Breadcrumb className="mt-4">
      <BreadcrumbList className="flex-nowrap">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="underline">
              Home{" "}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const name = routeNameMap[value] || value;
          return (
            <React.Fragment key={to}>
              <BreadcrumbItem>
                {!isLast ? (
                  <BreadcrumbLink asChild>
                    <Link to={to} className="underline">
                      {name}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="truncate w-[200px] md:w-auto">
                    {name}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
