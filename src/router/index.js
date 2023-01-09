import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";
import Blog from "../pages/Blog";
import ErrorPage from "../pages/ErrorPage";
import InfiniteSwapi from "../pages/InfiniteSwapi";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Blog /> },
      
      { path: "infinite-swapi", element: <InfiniteSwapi /> },
    ],
  },
]);
