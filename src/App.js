import React , {lazy , Suspense , useState , useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Cart from "./Components/Cart"
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import Shimmer from "./Components/Shimmer";
import appStore from "./redux_slice/appStore";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";


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
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

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
      },
      {
        path: "/cart",
        element: <Cart />
      }
      
    ],
    errorElement: <Error />
  },

  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);