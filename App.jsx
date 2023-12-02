import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./features/AboutPage";
import HomePage from "./features/HomePage";
import VansPage from "./features/Vans/VansPage";
import HostVanDetailPage from "./features/Vans/VanDetailsPage";
import Layout from "./common/Layout";
import HostDashboard from "./features/Host/HostDashboard";
import HostIncome from "./features/Host/HostIncome";
import HostReviews from "./features/Host/HostReviews";
import HostLayout from "./common/HostLayout";
import HostVans from "./features/Host/HostVans";
import HostHostVanDetailPage from "./features/Host/HostVans/HostVanDetailPage";
import HostVanDetailPageDashboard from "./features/Host/HostVans/HostVanDetailPage/Dashboard";
import HostVanDetailPagePricing from "./features/Host/HostVans/HostVanDetailPage/Pricing";
import HostVanDetailPagePhotos from "./features/Host/HostVans/HostVanDetailPage/Photos";
import ErrorPage from "./common/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<VansPage />} />
          <Route path="vans/:id" element={<HostVanDetailPage />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<HostIncome />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostHostVanDetailPage />}>
              <Route index element={<HostVanDetailPageDashboard />} />
              <Route path="pricing" element={<HostVanDetailPagePricing />} />
              <Route path="photos" element={<HostVanDetailPagePhotos />} />
            </Route>
            <Route path="review" element={<HostReviews />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
