import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Appointments from "./components/Appointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/appointments',
        element : <Appointments></Appointments>,
        loader : () => fetch('http://localhost:5000/appointments')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);