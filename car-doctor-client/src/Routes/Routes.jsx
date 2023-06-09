import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path : '/bookings',
        element : <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      },
      {
        path : '/book/:id',
        element : <PrivateRoutes><BookService></BookService></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://car-doctor-server-teal.vercel.app/services/${params.id}`)
      }
    ]
  },
]);

export default router