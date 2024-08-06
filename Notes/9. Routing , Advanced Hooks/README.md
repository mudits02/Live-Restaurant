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

1. Never declare your state variables outside of the component , it will always throw an errorbr><br>
2. It is a good practice to declare all the state variables in the starting of the component itself.<br><br>
3. Never use **useState** under an if-else condtions or loops or inside a function.<br><br>

---

## Routing (using React Router DOM)

1. **RouterProvider** from the react-router-dom provides us the routing configuration for our app<br><br>
2. **RouterProvider** is a component and is passed to the root.render() of the react application in the base file(App.js for us)<br><br>
3. 