import NotFoundPage from "@/pages/404";
import CheckoutPage from "@/pages/checkout-page";
import DetailsPage from "@/pages/details-page";
import HomePage from "@/pages/home-page";
import ProductsPage from "@/pages/products-page";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
