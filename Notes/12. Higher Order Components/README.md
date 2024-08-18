# Higher Order Component

1. ***Higher Order Component*** -> A js function that takes component as an arguement and returns a component. <br><br>
2. This can be used if we want to enhance a component , for example say adding tags to a card or say adding label. <br><br>
3. The code snippet below is declared inside the RestauranCard component and takes the component as an input and returns the componend with a label tag on it , that is why it is returning a calbback function(it is just a template , see the main code for reference)
```
const withPromotedLabel = (RestaurantCard) => {
    return () => {
        
    }
}
```

---

## General Knowledge

1. **Controlled** and **Uncontrolled** components -> **Controlled** components mean that when a parent component controls the state variables and like generating dynamic data of its child component , basically it sends that data and state variables through the ***props***.<br><br>
2. **Uncontrolled** Component are when the child class has the control of all these variables on its own and works independently of the parent component , basically when we had the **isOpen** inside the ***RestaurantCategory*** component , then it was **Uncontrolled** but when it ***RestaurantMenu.js*** gives it the state variables through ***props*** , then we call it **Controlled** component<br><br>

---

## Lifting up the State

Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.<br><br>

[Read more about Lifting up the state here , must read](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)

---

1. **Context** is shown from the component in which they are declared.<br><br>
2. Whenever we are doing <UserContext.Provider value={}> </UserContext.Provider> , whichever component we wrap it up on , only in that the value of the USerContext will chnage , for example if we did around App , then in the entire app , if we did in around say **Header** component , then it only changes around the **Header** and will remain the default value in other components. <br><br>