import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Coverage from "../Pages/Coverage/Coverage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/coverage",
        loader: () => fetch("../warehouses.json"),
        element: <Coverage />,
      },
    ],
  },
]);
export default router