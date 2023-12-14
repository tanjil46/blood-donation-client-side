import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Homepages/Home';
import Resistration from './Resistration/Resistration';
import Resister from './Single Components/Resister';
import Login from './Single Components/Login';
import Authprovider from './Single Components/Authprovider';
import Dashboard from './Dashboard/Dashboard';
import Createdonation from './Dashboard/Userdashboard/Createdonation';











const router=createBrowserRouter([

 
{
  path:'/',
  element:<Root></Root>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/resistration',
      element:<Resistration></Resistration>
    },
    {
      path:'/resister',
      element:<Resister></Resister>
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ]
},
{
  path:'dashboard',
  element:<Dashboard></Dashboard>,
  children:[
 {
  path:'create',
  element:<Createdonation></Createdonation>
 }




  ]
}











])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
    
   <div className="max-w-8xl min-h-screen mx-auto bg-slate-600 " 
    >
   
    <RouterProvider router={router}></RouterProvider>
    
    </div>
   </Authprovider>

  </React.StrictMode>,
)

