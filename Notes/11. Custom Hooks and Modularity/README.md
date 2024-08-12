# Custom Hooks

1. Custom hooks is when we are building that hook to be used multiple times. DOne to make the code more modular.<br><br>
2. For example , in the **RestaurantMenu** component ,  we see that the component has API call also inside it which kinda breaks the SRP , so we are using ***useRestaurantMenu*** , which is a custom hook and we are using it to fetch the menu data and **RestaurantMenu** is now just concerend with displaying the menu data.<br><br>
3. 