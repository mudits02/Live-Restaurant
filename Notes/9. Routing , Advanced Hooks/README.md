# Routing and Advanced Hooks

## useEffect() hook

1. useEffect hook is called every time after the componenet gets rendered.<br><br>
2. The times of useEffect being called depends on the ***dependency array*** declared in the second arguement of the useEffect hook. **Dependency array** is ***not compulsory*** to be declared but the callback function is.
3. if we dont delcare any **dependency array** , then we see that the useEffect is called after every render cycle<br><br>
4. if there is an empty **dependency array** , then useEffect is called only in the initial render and then it is not called.<br><br>
5. If there is an element inside that array , then 
```
useEffect(() => {
    console.log("useEffect called");
}, [btnReact]);

```

Now useEffect is called everytime **btnReact** is updated. We can add more such elements in the array and useEffect will be called if anyone of them gets updated<br>

---

## useState Hook

1. Never declare your state variables outside of the component , it will always throw an error<br><br>
2. It is a good practice to declare all the state variables in the starting of the component itself.<br><br>
3. Never use **useState** under an if-else condtions or loops or inside a function.<br><br>

---

## Routing (using React Router DOM)

1. **RouterProvider** from the react-router-dom provides us the routing configuration for our app<br><br>
2. **RouterProvider** is a component and is passed to the root.render() of the react application in the base file(App.js for us)<br><br>
3. **useRouterError** is a component which gives us the error that is being thrown at a particaular route.(Can be seen in ***Error.js*** component)<br><br>
4. The hook provides access to the error object that was thrown during the rendering of a route.<br><br>
5. It helps in creating custom error handling logic by rendering a specific component in case of an error.<br><br>
6. **Children Routes** are basically used for creating nested routing in react and it is important when we have to use the full potential of single page application benefit of react. So , for example , we need to keep the **Header** Component at place and want the other componeents to be rendered after we hit the route , then we use **Outlet** componenet of the **react-route-dom** <br><br>
7. **Outlet** is a inbuilt component provided by **react-router-dom** which actually replaces the component of the child routes of a parent router and that is replaced by the child component as seen in App.js <br><br>
8. **Children Routes** takes the input or is defined in form of a list<br><br>
9. Working of **Outlet**
```
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
      }

      {
        path: "/about",
        element: <About />,
        errorElement: <Error />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
    errorElement: <Error />
  },

  
]);

```

Now in this , Whenever we hit any route , **Outlet** replaces itself with the mapped Component<br>

---

## Link Component

1. We never use anchor tag to redirect to the routes because when we use anchore tags , then they actually **reloads** the entire compenent including the **Header**.<br><br>
2. Instead we use ***Link*** , which is a component provided by the **react-router-dom** and that doesnt **reloads** the entire component ,instead it just refreshes that particular component and that gets replaced by it.<br><br>
3. This enables us to use the react's advantage , i.e. **Single Page Application**.<br><br>

---

## Types of Routing

1. **Client-Side Routing** -> When we do routing of endpoints from the client side(basically using **Link**). We do not make a network call in this.<br><br>
2. **Server-Side Rendering** -> Routing done from the server side. We make a network call to the server and then that server in response sends the **HTML** file which needs to be rendered when we hit that particular **endpoint**.<br><br>
3. **Link** behind the scene is basically using **anchor** tag , we can see it by loooking at the developer's console<br><br>