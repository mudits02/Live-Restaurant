# Custom Hooks

1. Custom hooks is when we are building that hook to be used multiple times. DOne to make the code more modular.<br><br>
2. For example , in the **RestaurantMenu** component ,  we see that the component has API call also inside it which kinda breaks the SRP , so we are using ***useRestaurantMenu*** , which is a custom hook and we are using it to fetch the menu data and **RestaurantMenu** is now just concerend with displaying the menu data.<br><br>

---

## Chunking aka CodeSplitting aka Dynamic Loading aka Lazy Loading

1. **Chunking** means when we are breaking down the app into smaller bundles of chunks. 
2. **Context** ->. when we are building a prod or dev build , there is a common ***js*** file in the dev tools that is created by **parcel** and that file is like a **crux** of all the js files we have written in the **React** project. Now , if we dont do chunking , then there is a sinlg ebundled file and that becomes too bulky and slows our application. <br><br>
3. **Lazy loading** or **On - Demand Loading** -> It means we want a particular component to load only when the user hits that endpoint or page , we are not keeping that component pre loaded , it loads only when it is demanded to load. <br><br>
4. to do **lazy laoding** ,  we use ***lazy()*** , it takes a callback function and uses **import()** (not the one used in top of react comp.) and we pass the **path** of the component we need to be loaded. <br><br>
5. We will get a new Grocery build js file in the dist folder as well as our network console.<br><br>
6. If we directly do it , then it will throw an error because now **grocery** is fetched from a new js file and that takes time to load but meanwhile our react project tries to take it to the grocery endpoint but finds that it has none , that is why we will use **Suspense**