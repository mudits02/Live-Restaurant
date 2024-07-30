# Import , Export

1. If we have to export multiple files from the same componeent , then we just declare export before the constant we want to export. This export is called Named export the other one is default export.<br><br>
2. There are 2 types of **Export** , ***Default Export*** and ***Named Export*** , default are used when we have to export a single component or sinle const from a js file but when we have to export multiple exports froma signle js file , we give each entity an **export** prefix.<br><br>
3. Similary when we import these exports declared , we do it in 2 ways 
   1. To import a default export we simply do this -
    ```
    import RestaurantCard from "./RestaurantCard";
    ```

    2. When we have to import a **named** export , then we do this -
    ```
    import { restaurantList } from "../utils/constants";
    ```

<br>

4. **Mixed Imports/Exports**
   1. Following way is to do **Mixed Export**
   ```
        // MyModule.js
        const MyDefaultComponent = () => {
        return <div>Hello, world!</div>;
        };

        const helperFunction = () => {
        console.log('Helper function');
        };

        export default MyDefaultComponent;
        export { helperFunction };

   ```

   2. And now **Mixed Import**
    ```
            // App.js
        import MyDefaultComponent, { helperFunction } from './MyModule';

        const App = () => {
        helperFunction();

        return (
            <div>
            <MyDefaultComponent />
            </div>
        );
        };

        export default App;

    ```