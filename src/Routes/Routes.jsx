import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Ragister from "../Pages/Auth/Ragister/Ragister";

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
  {
    path:'/',
    element:<AuthLayout/>,
    children:[
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/ragister',
        element:<Ragister/>
      }
    ]
  }
]);
export default router