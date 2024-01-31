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
import HostDashboard, {loader as hostDashboardLoader} from "./features/Host/HostDashboard";
import HostIncome from "./features/Host/HostIncome";
import HostReviews, {loader as hostReviewsLoader} from "./features/Host/HostReviews";
import HostVans, { loader as hostVansLoader } from "./features/Host/HostVans";
import HostVansDetailspage, {
  loader as hostVansDetailspageLoader,
} from "./features/Host/HostVans/HostVansDetailspage";
import HostVansDetailspageDashboard from "./features/Host/HostVans/HostVansDetailspage/Dashboard";
import HostVansDetailspagePricing from "./features/Host/HostVans/HostVansDetailspage/Pricing";
import HostVansDetailspagePhotos from "./features/Host/HostVans/HostVansDetailspage/Photos";
import NotFoundErrorPage from "./common/NotFoundErrorPage";
import ErrorPage from "./common/ErrorPage";
import LoginPage, {
  loader as loginPageLoader,
  action as loginPageAction,
} from "./features/LoginPage";
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
      <Route
        path="login"
        element={<LoginPage />}
        loader={loginPageLoader}
        action={loginPageAction}
      />
      <Route
        path="vans/:id"
        element={<VansDetailspage />}
        loader={vansDeatailspageLoader}
        errorElement={<ErrorPage />}
      />
      {/* HOST SECTION */}
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<HostDashboard />}
          loader={hostDashboardLoader}
        />
        <Route
          path="income"
          element={<HostIncome />}
          loader={async ({ request }) => await chceckIfUserIsLogedIn(request)}
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
            loader={async ({ request }) => await chceckIfUserIsLogedIn(request)}
          />
          <Route
            path="pricing"
            element={
              <HostVansDetailspagePricing
                loader={async ({ request }) =>
                  await chceckIfUserIsLogedIn(request)
                }
              />
            }
          />
          <Route
            path="photos"
            element={
              <HostVansDetailspagePhotos
                loader={async ({ request }) =>
                  await chceckIfUserIsLogedIn(request)
                }
              />
            }
          />
        </Route>
        <Route
          path="reviews"
          element={<HostReviews />}
          loader={hostReviewsLoader}
        />
      </Route>
      <Route path="*" element={<NotFoundErrorPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
