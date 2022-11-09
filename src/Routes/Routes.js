import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/layout/Main";
import Page404 from "../Components/Pages/404Page/Page404";
import AddReview from "../Components/Pages/AddReview/AddReview";
import AddService from "../Components/Pages/AddService/AddService";
import AllServicePage from "../Components/Pages/AllServicesPage/AllServicePage";
import Home from "../Components/Pages/Home/Home";
import Register from "../Components/Pages/Home/Register/Register";
import Login from "../Components/Pages/Login/Login";
import MyReviews from "../Components/Pages/MyReviews/MyReviews";
import ServiceDetails from "../Components/Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/services?limit=3"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/allservices",
        element: <AllServicePage></AllServicePage>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/addreview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        element: <Page404></Page404>,
      },
    ],
  },
]);
