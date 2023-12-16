import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About from "./features/AboutPage";
import HomePage from "./features/HomePage";
import VansPage, { loader as vansPageLoader } from "./features/Vans/VansPage";
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
import NotFoundErrorPage from "./common/NotFoundErrorPage";
import ErrorPage from "./common/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<VansPage />}
        errorElement={<ErrorPage />}
        loader={vansPageLoader}
      />
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
      <Route path="*" element={<NotFoundErrorPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
