import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { ResultsPage } from "../pages/ResultsPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="Results" element={<ResultsPage />} />
      <Route path="Cart" element={<CartPage />} />
    </Routes>
  );
}
