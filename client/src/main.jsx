import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./components/homepage/index.jsx";
import Personal from "./components/personal/index.jsx";
import Dashboard from "./components/dashboard/index.jsx";
import pocketDocLogo from "./assets/pocketdoc.png";
import Admin from "./components/admin/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <nav>
          <ul className="flex items-center justify-around">
            <li>
              <Link to="/">
                <img src={pocketDocLogo} className="h-32" />
              </Link>
            </li>
            <div className="flex gap-4 text-sm">
              <li>
                <Link to="personal">Personal</Link>
              </li>
              <li>
                <Link to="dashboard">Dashboard</Link>
              </li>
            </div>
          </ul>
        </nav>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "personal",
        element: <Personal />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
