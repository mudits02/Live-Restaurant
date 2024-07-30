# Props , Config Driven UI

1. Props or properties are just normal arguements to a function.<br><br>
2. So when we have to pass data dynamically , then we use **props** in React. So , we also pass in in the parameter of the component in which we want that data and then just do **props.that_data_point** and its imported 

```
    <h3>{props.resName}</h3>
    <h4>{props.cuisines}</h4>
```

like above

3. We can and should ***Destrcutre*** the props which we are passing because it makes better of code readability as we dont have to do props.property and again and again.<br><br>

```
    const RestaurantCard = (props) => {
    console.log(props);
    const {resName , cuisines} = props;
    return(
        <div className="res-card" style={styleCard}>
            <h3>{resName}</h3>
            <h4>{cuisines}</h4>
            <h4>4.3 ⭐️</h4>
            <h4>38 min</h4>
        </div>
    )
}
```

Like how we done in point number 2 , we have just dont have to use props. now(JS concept of destructuring of objects)<br>

4. Config Driven UI -> All the UI is driven by a config , i.e. we get data from the backend dynamically and then it is rendered by the UI in accordance to the data , dynamically.<br><br>
5. In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase. This approach makes it easier to customize the UI for user groups or different use cases, without the need for extensive coding.<br><br>
6. We can also understand it as backend driven or API driven UI.<br><br>
7. Whenever we are looping (using array functions for example map) , we get a warning that stating that  ***Each child in a list should have a unique key*** , so this is because loopign around we have to map it to a unique ID or key to get this error resolved

```
const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {restaurantList.map((restaurant) => 
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                )}
            </div>
        </div>
    )
}
```

8. **Need of Keys** -> It is done to optimize render cycle. So basically when there are not keys in the items we are iterating through , React re renders the entire items when some new is addded because it does not know the order in whcih they are and the order in which they will need to be arranged. That is why keys are given so that if for example a new restaurant is added , React knows that these items have already been rendered and dont need to be re rendered.<br><br>
9. We can also use the following way to do this(**not recommended by the official docs**)

```
   const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {restaurantList.map((restaurant , index) => 
                    <RestaurantCard key={index} resData={restaurant} />
                )}
            </div>
        </div>
    )
} 
```

index is the second parameter that starts from 0 and increments over every iteration but is not recommended by the docs [Read this](https://dev.to/shiv1998/why-not-to-use-index-as-key-in-react-lists-practical-example-3e66)<br><br>

10. The major reasons why indexes are not used as keys because 
    1.  Performance Issues due to unnecessary re-renders.
    2.  Issues in data mapping in case list items are sorted, filtered, or deleted.
<br><br>

11. Use indexes only when ur backend is not sending a unique ID from the backend<br><br>
    

    