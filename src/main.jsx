import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Count from "./routes/count/Count";
import Home from "./routes/home/Home";
import PageNotFound from "./routes/pagenotfound/PageNotFound";
import ErrorTestingPage from "./routes/errortesting/ErrorTestingPage";
import "./main.css";

const routes = [
  {
    children: [
      { path: "/", element: <Home /> },
      { path: "/count", element: <Count /> },
      { path: "/error-test", element: <ErrorTestingPage /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
];
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
