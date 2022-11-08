import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
]);
