import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddTutor from "../pages/AddTutor";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <h1>Error Page</h1>,
      children: [
        {
          path: '/',
          element: <Home /> 
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/addTutor',
          element: <AddTutor />
        }
      ]
    },
  ]);

  export default router;