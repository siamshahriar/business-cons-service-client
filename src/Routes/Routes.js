import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/layout/Main";
import Page404 from "../Components/Pages/404Page/Page404";
import AddReview from "../Components/Pages/AddReview/AddReview";
import AddService from "../Components/Pages/AddService/AddService";
import AllServicePage from "../Components/Pages/AllServicesPage/AllServicePage";
import Blog from "../Components/Pages/Blog/Blog";
import JVNODE from "../Components/Pages/Blog/JVNODE";
import JWT from "../Components/Pages/Blog/JWT";
import NodeMulti from "../Components/Pages/Blog/NodeMulti";
import SQL from "../Components/Pages/Blog/SQL";
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
        loader: () =>
          fetch(
            "https://business-cons-service-server.vercel.app/services?limit=3"
          ),
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
        loader: () =>
          fetch("https://business-cons-service-server.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://business-cons-service-server.vercel.app/services/${params.id}`
          ),
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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog/dfsqlnosql",
        element: <SQL></SQL>,
      },
      {
        path: "/blog/jwt",
        element: <JWT></JWT>,
      },
      {
        path: "/blog/jvnode",
        element: <JVNODE></JVNODE>,
      },
      {
        path: "/blog/nodejs",
        element: <NodeMulti></NodeMulti>,
      },
      {
        path: "/*",
        element: <Page404></Page404>,
      },
    ],
  },
]);
