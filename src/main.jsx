import * as React from "react";
import './index.css'
import './App.css'
import App from './App.jsx'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "./pages/About/About.jsx";
import Zerotwo from "./pages/zero-two/Zerotwo.jsx"
import Zero2 from "./pages/zero-two/Zero2.jsx"
import Zero3 from "./pages/zero-two/Zero3.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,

  },
  {
    path: "Zerotwo",
    element: <Zerotwo />,

  },
  {
    path: "Zerotwo/Zero2",
    element: <Zero2 />,

  },
  {
    path: "Zero3",
    element: <Zero3 />,

  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);