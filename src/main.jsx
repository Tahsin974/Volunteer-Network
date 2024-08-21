import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';

import Login from './Pages/Home/Login/Login/Login.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Register from './Pages/Register/Register.jsx';
import Events from './Pages/Events/Events/Events.jsx';
import Admin from './Pages/Admin/Admin/Admin.jsx';
import AddEvent from './Pages/Admin/AddEvent/AddEvent.jsx';
import VolunteerList from './Pages/Admin/VolunteerList/VolunteerList.jsx';
import Home from './Pages/Home/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider><Home></Home></AuthProvider>,
  },
  {
    path: "/home",
    element: <AuthProvider><Home></Home></AuthProvider>,
  },
  
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
    children:[
      {
        path: "/admin",
    element: <VolunteerList></VolunteerList>,
      },
      {
        path: "/admin/volunteerlist",
    element: <VolunteerList></VolunteerList>,
      },
      {
        path: "/admin/addevent",
    element: <AddEvent></AddEvent>,
      }
      
    ]
  },
  {
    path: "/register/:activityID",
    element: <PrivateRoute>
      <Register></Register>
    </PrivateRoute>,
  },
  {
    path: "/register",
    element: <PrivateRoute>
      <Register></Register>
    </PrivateRoute>,
  },
  {
    path: "/events",
    element: <PrivateRoute>
      <Events></Events>
    </PrivateRoute>,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
