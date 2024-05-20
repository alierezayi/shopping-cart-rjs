import NotFoundPage from "@/pages/404";
import CheckoutPage from "@/pages/CheckoutPage";
import DetailsPage from "@/pages/DetailsPage";
import ProductsPage from "@/pages/ProductsPage";
import { Navigate, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route index element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
