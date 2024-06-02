import NotFoundPage from "@/pages/404";
import CheckoutPage from "@/pages/CheckoutPage";
import DetailsPage from "@/pages/DetailsPage";
import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/ProductsPage";
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
