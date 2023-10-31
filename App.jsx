import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./features/AboutPage";
import HomePage from "./features/HomePage";
import VansPage from "./features/Vans/VansPage";
import VanDetailPage from "./features/Vans/VanDetailsPage";
import Layout from "./common/Layout";
import HostDashboard from "./features/Host/HostDashboard";
import HostIncome from "./features/Host/HostIncome";
import HostReviews from "./features/Host/HostReviews";
import HostLayout from "./common/HostLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<VansPage />} />
          <Route path="vans/:id" element={<VanDetailPage />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<HostIncome />} />
            <Route path="review" element={<HostReviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
