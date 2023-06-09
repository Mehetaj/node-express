import { createBrowserRouter } from "react-router-dom";
import Home from '../Component/Home'
import Main from "../Layout/Main";
import Login from "../Component/Login";
import Signup from "../Component/Signup";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
        ]
    },
    {
        path : '/login',
        element : <Login/>
    },
    {
        path : '/signup',
        element : <Signup/>
    }
])

export default router