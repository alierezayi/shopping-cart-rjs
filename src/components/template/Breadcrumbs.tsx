import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import React from "react";
import { useProducts } from "@/context/products-context";
import { shortenText } from "@/lib/helpers";

function Breadcrumbs() {
  const { products } = useProducts();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(location);

  const idNameMap = () => {
    if (pathnames[0] === "products" && pathnames.length > 1) {
      const id = pathnames[pathnames.length - 1];
      const findedItem = products.find((item) => item.id === +id);

      return {
        [id]: shortenText(findedItem?.title!),
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
      <BreadcrumbList>
        {location.pathname === "/" ? (
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        ) : (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="underline">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const name = routeNameMap[value] || value;

          return (
            <React.Fragment key={to}>
              <BreadcrumbItem>
                {!isLast ? (
                  <BreadcrumbLink href={to} className="underline">
                    {name}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{name}</BreadcrumbPage>
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
