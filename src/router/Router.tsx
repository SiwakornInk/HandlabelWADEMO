import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../layouts/maincontent/MainLayout";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/main" replace />,
    },
    {
      path: "/main",
      element: <MainLayout />,
    },
    // {
    //   path: "/main",
    //   element: <MainLayout />,
    //   children: [
    //     { element: <Navigate to="/main/dashboard" />, index: true },
    //     { path: "dashboard", element: <Dashboard /> },
    //     // { path: "quotation", element: <Quotation /> },
    //     { path: "taxinvoice", element: <TaxInvoice /> },
    //   ],
    // },
    // { path: "/main/taxinvoice/new", element: <TaxInvoiceCreate /> },
    {
      path: "*",
      element: <Navigate to="/main" replace />,
    }
  ]);
  return routes;
}
