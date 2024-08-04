# Real World Architectures and useEffect hook

1. ***SRP*** -> Single Responsibility Principle is a design pattern(Under the **SOLID** principles) which states that one service should do only one task or take only 1 responsibilty. This makes the code more maintainable and testable.<br><br>
2. ***API render cycle of react*** -> Generally in UI dev , we see there are two render cycles that can be followed

```mermaid
graph LR
    A[ Page Load ] --> B[ API Call ]
    B --> C[ Render ]
```

Above is the approach 1<br><br>

```mermaid
graph LR
    A[ Page Load ] --> B[ Render ]
    B --> C[ API Call ]
    C --> D[ Re Render ]
```
This is approach 2
<br>

3. React uses approach 2 because it gives a better User Experience. <br><br>
4. ***useEffect()*** hook is another commonly used hook. It creates its effect after render of the component. We can see with an example 
```
useEffect(() => {
        console.log("useEffect called")
    } , []);

    console.log("Body rendered");
```

In the above output in **Body.js** , we see that first **Body Rendered** is printed and then **useEffect Called** is printed. This happens because first when the body.js is initially rendered , the body rendered is printed , after the re render of the componeent we see useEffect being called , it follows the above render cycle. Basically it keeps the useEffect in the calbback(waiting stage) and once the JSX and all is rendered , then that callback function is called and we the **useEffect** hook's callback being executed. <br><br>

5. ***Condotional Rednering*** -> When we render on the basis of a conditon. Best example is when we render ShimmerUI<br><br>
6. When we want to create a dynamic button of Login and logout , then we cannot use **onClick()** event handler because after it gets updated (the login button to logout button) , we need that the value on the button should get refreshed somehow to see the changes but that cannot happen without using State Variables.<br><br>
7. And when we are changing the state from **Login** to **Logout** on the click of the button , the entire **Header** component gets re rendered after clicking the button , this can be checked after looking at the console of the browser that ***Header Rendered*** is printed.<br><br>
8. Rendering means we are calling the header function in a way again , this is the way how this variable gets updated in reality<br><br>
9. In this , the ***Diff*** algorithm is also playing a crucial part because it uses the **Virtual DOM** and finds that the difference in the new and previous DOM was the change of the button variable and it re rendered in the background only that specific variable.<br><br>
10. So , in search functionality , whenever we are typing a text , the component is getting re-rendered. This happens because we are changing the state variable and ...<br><br>
11. **Whenever we change a state variable in React , the component is bound to be re-rendered(Also called React triggering a Reconciliation Cycle)**<br><br>
12. So **React** is re rendering the component after every time when we are typing because we are updating the **state variable** but in terms of **DOM** , it is just updating the part of the text being typed in the search input box DOM manipulation is an expensive process and instead it uses **Diff** algo and just updates the changed part of the **DOM**<br><br>