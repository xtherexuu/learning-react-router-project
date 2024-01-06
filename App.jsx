import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About from "./features/AboutPage";
import HomePage from "./features/HomePage";
import VansPage, { loader as vansPageLoader } from "./features/Vans/VansPage";
import VansDetailspage, {
  loader as vansDeatailspageLoader,
} from "./features/Vans/VansDetailspage";
import Layout from "./common/Layout";
import HostLayout from "./common/HostLayout";
import HostDashboard from "./features/Host/HostDashboard";
import HostIncome from "./features/Host/HostIncome";
import HostReviews from "./features/Host/HostReviews";
import HostVans, { loader as hostVansLoader } from "./features/Host/HostVans";
import HostVansDetailspage, {
  loader as hostVansDetailspageLoader,
} from "./features/Host/HostVans/HostVansDetailspage";
import HostVansDetailspageDashboard from "./features/Host/HostVans/HostVansDetailspage/Dashboard";
import HostVansDetailspagePricing from "./features/Host/HostVans/HostVansDetailspage/Pricing";
import HostVansDetailspagePhotos from "./features/Host/HostVans/HostVansDetailspage/Photos";
import NotFoundErrorPage from "./common/NotFoundErrorPage";
import ErrorPage from "./common/ErrorPage";
import LoginPage from "./features/LoginPage";
import { chceckIfUserIsLogedIn } from "./api";

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
      <Route path="login" element={<LoginPage />} />
      <Route
        path="vans/:id"
        element={<VansDetailspage />}
        loader={vansDeatailspageLoader}
        errorElement={<ErrorPage />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<HostDashboard />}
          loader={async () => await chceckIfUserIsLogedIn()}
        />
        <Route
          path="income"
          element={<HostIncome />}
          loader={async () => await chceckIfUserIsLogedIn()}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<ErrorPage />}
        />
        <Route
          path="vans/:id"
          element={<HostVansDetailspage />}
          loader={hostVansDetailspageLoader}
          errorElement={<ErrorPage />}
        >
          <Route
            index
            element={<HostVansDetailspageDashboard />}
            loader={async () => await chceckIfUserIsLogedIn()}
          />
          <Route
            path="pricing"
            element={
              <HostVansDetailspagePricing
                loader={async () => await chceckIfUserIsLogedIn()}
              />
            }
          />
          <Route
            path="photos"
            element={
              <HostVansDetailspagePhotos
                loader={async () => await chceckIfUserIsLogedIn()}
              />
            }
          />
        </Route>
        <Route
          path="reviews"
          element={<HostReviews />}
          loader={async () => await chceckIfUserIsLogedIn()}
        />
      </Route>
      <Route path="*" element={<NotFoundErrorPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
