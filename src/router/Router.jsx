import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import ForgetPassword from "../Pages/ForgetPassword";
import Error404 from "../components/Error404";
import AddListing from "../Pages/AddListing";
import MyListing from "../Pages/MyListing";
import UpdateServices from "../Pages/UpdateServices";
import MyOrder from "../Pages/MyOrder";
import CategoryFilteredProducts from "../Pages/CategoryFilteredProducts";
import MyProfile from "../Pages/MyProfile";
import FAQ from "../Pages/FAQ";
import CTA from "../Pages/CTA";
import Blogs from "../Pages/Blogs";
import BlogDetail from "../Pages/BlogDetail";
import Statistics from "../Pages/Statistics";
import Highlights from "../Pages/Highlights";

import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import DashboardHome from "../Pages/DashboardHome";
import AllListing from "../Pages/AllListing";
import AllOrder from "../Pages/AllOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      { index: true, element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/service/:id", element: <ServiceDetails /> },
      { path: "/forget/:email", element: <ForgetPassword /> },
      { path: "/my-profile", element: <MyProfile /> },
      {
        path: "/add-services",
        element: (
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-services",
        element: (
          <PrivateRoute>
            <MyListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-services/:id",
        element: (
          <PrivateRoute>
            <UpdateServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrder />
          </PrivateRoute>
        ),
      },
      {
        path: "/category-filtered-product/:categoryName",
        element: <CategoryFilteredProducts />,
      },
      { path: "/faq", element: <FAQ /> },
      { path: "/cta", element: <CTA /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <BlogDetail /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/highlights", element: <Highlights /> },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "add-listing", element: <AddListing /> },
      { path: "my-listing", element: <MyListing /> },
      { path: "my-order", element: <MyOrder /> },
      { path: "my-profile", element: <MyProfile /> },
      { path: "update-services/:id", element: <UpdateServices /> },
      {
        path: "all-listing",
        element: (
          <AdminRoute>
            <AllListing />
          </AdminRoute>
        ),
      },
      {
        path: "all-order",
        element: (
          <AdminRoute>
            <AllOrder />
          </AdminRoute>
        ),
      },
    ],
  },
]);
