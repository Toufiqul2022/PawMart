import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import ForgetPassword from "../Pages/ForgetPassword";
import Error404 from "../components/Error404";
import AddListing from "../Pages/AddListing";
import MyListing from "../Pages/MyListing";
import UpdateServices from "../Pages/UpdateServices";
import MyOrder from "../Pages/MyOrder";
import CategoryFilteredProducts from "../Pages/CategoryFilteredProducts";
import MyProfile from "../Pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/forget/:email",
        element: <ForgetPassword />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
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
    ],
  },
]);
