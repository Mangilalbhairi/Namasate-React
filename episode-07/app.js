import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import {createBrowserRouter,Outlet,RouterProvider, Outlet} from "react-router-dom";
import About from "./src/components/About.js";
import Error from "./src/components/Error.js";
import Contact from "./src/components/Contact.js";
import RestaurantMenu from "./src/components/Reastaurantmenu.js";
import Grocery from "./src/components/Grocery.js";



// <---Applayout Component--->
const Applayout = () => {
    return (
      <div className="wrapper">
        <Header />
        <Outlet/>
      </div>
    );
  };
  // <-- Create Root Here -->
 
  // <--- Create path routing here --->

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Applayout/>,
      children:[
        {
          path:"/",
          element:<Body/>,
        },
        {
          path:"/about/:id",
          element:<About/>,
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/reastraurnat/:id",
          element:<RestaurantMenu/>
        },
        {
          path:"/grocery",
          element:<Grocery/>
        }

      ],
      errorElement:<Error/>
    },
    
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router={appRouter}/>);