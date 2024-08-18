import React , {lazy , Suspense , useState , useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error"
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import Shimmer from "./Components/Shimmer";
import UserContext from "./utils/UserContext";


const Grocery = lazy(() =>
  import("./Components/Grocery")
)


const Applayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      user: "Mudit Shukla"
    };
    setUserName(data.user);
  }, [])

    return (
      //Default
      <UserContext.Provider value={{loggedInUser: userName , setUserName}}>
        {/* User Name */}
        <div className="app">
          <UserContext.Provider value={{loggedInUser: "Header Name"}}>
            {/* Header Name */}
            <Header />
          </UserContext.Provider>
            <Outlet /> 
        </div>
      </UserContext.Provider>
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