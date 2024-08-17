import React , {lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error"
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import Shimmer from "./Components/Shimmer";


const Grocery = lazy(() =>
  import("./Components/Grocery")
)

const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet /> 
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children:[

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />
      },

      {
        path: "/contact",
        element: <Contact />
      },

      {
        path: "/grocery",
        element:<Suspense fallback={<Shimmer />}> <Grocery /> </Suspense>
      },

      {
        path: "/restaurants/:resId", //:resId means that resId can be dynamically changed
        element: <RestaurantMenu />
      }
      
    ],
    errorElement: <Error />
  },

  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);