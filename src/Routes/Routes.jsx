import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Ragister from "../Pages/Auth/Ragister/Ragister";
import PrivatRoutes from "./PrivatRoutes";
import Raider from "../Pages/Raider/Raider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import Dashboard from "../Layouts/Dashboard";
import MyParcels from "../Pages/Dashbord/MyParcels/MyParcels";
import Payment from "../Pages/Dashbord/Payment";
import PaymentSuccess from "../Pages/Dashbord/PaymentSuccess";
import PaymentCancel from "../Pages/Dashbord/PaymentCancel";
import PaymentsHistory from "../Pages/Dashbord/PaymentsHistory";
import ApproveRiders from "../Pages/Dashbord/ApproveRiders";
import ManageUser from "../Pages/Dashbord/ManageUser";
import AdminRoutes from "./AdminRoutes";

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
      {
        path: "rider",
        element: (
          <PrivatRoutes>
            <Raider></Raider>
          </PrivatRoutes>
        ),
      },
      {
        path: "send-percel",
        loader: () => fetch("../warehouses.json"),
        element: (
          <PrivatRoutes>
            <SendParcel />
          </PrivatRoutes>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/ragister",
        element: <Ragister />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivatRoutes>
        <Dashboard />
      </PrivatRoutes>
    ),
    children: [
      {
        path: "my-parcels",
        element: <MyParcels />,
      },
      {
        path: "payment/:parcelId",
        element: <Payment />,
      },
      {
        path: "payments-history",
        element: <PaymentsHistory />,
      },
      {
        path: "payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment-canclded",
        element: <PaymentCancel />,
      },
      {
        path: "approve-riders",
        element: <ApproveRiders />,
      },
      {
        path: "manage-user",
        element: (
          <AdminRoutes>
            <ManageUser />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
export default router