# Redux

1. Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces<br><br>
2. **Slices** are data logical partitions of the centralized **Redux Stores** that make like different partitions of the entire store. For exmaple, a **cart** will have all the data of the **cart** functionality. <br><br>
3. Also , it is ok to keep all the data in a single redux store. <br><br>
4. Below is the flow that how we **Write** data and modify the **Slices**
![Redux Store Flow](https://github.com/mudits02/Live-Restaurant/blob/master/images/redux_flowchart.jpg)

In the above image , as soon as we click the Add button , an **action** is **dispatched** and that **Dispatch Action** then calls a function called **reducer** and that **reducer function** modifies the slicer of our **Redux Store**. <br><br>
5. Below is the code that how we **Read** data from the slice and modify our **component**
![Redux Store Read Flow](https://github.com/mudits02/Live-Restaurant/blob/master/images/6203716402783829803.jpg)

In the above image , our header component , in this example has **Subscribed** to the slice in the **Redux** store and this is done using **Selector**. <br><br>

6. The entire flow is below
![Redux entire flow](https://github.com/mudits02/Live-Restaurant/blob/master/images/6203716402783829805.jpg)

---

## Redux Practical

1. So , **Actions** in redux act as an API , like they are used to say add , remove , clear , etc. the cart in this particular project<br><br>
2. Inside the **addItems** , the callback function is basically our **reducer Function**
```
onst cardSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state , action) => {

        }
    }
});
```

also , the action modifies the state on action called and the state has the access to the **items** array inside the **initialState**
<br>

3. Whenever we do a reducer action , we are mutating the **state** of the application. <br><br>

4. If we want to pass some arguements inside of a **onClick()** fucntion , then we have to do like this 
```
onClick={(item) => handleAddItems(item)}
```

and not

```
onClick={() => handleAddItems(item)}
```

or this is also wrong

```
onClick={handleAddItems(item)}
```

<br>

5. But in redux , the correct way of passing the data is

```
onClick={() => handleAddItem(item)}
```

if we dont do this , we get this error -> ***A non-serializable value was detected in an action, in the path: payload. Value: SyntheticBaseEvent*** 

6. Always use **Selector** and subscribe only to the Slice u want to use and not to subscrbe with the entire store. If we subscribe to the whole Store , it gives a low efficiency. <br><br>
7. It is literally named **Selector** because we are selecting a certain part of the store. <>br><br>
8. In the older version of **Redux** , it was offcially not allowed to mutate the state but with the new versions , now things cannot be done without mutating the state. Nor do we have to return it.<br><br>
9. Behind the scene , it is actually creating an Immuatable object and not letting it mutate but for the developers , we can and have to mutate the state as Redux uses **Immer** library internally to first mutate the state and then find the diff between them and then just create an **Immutatble** state for it internally. <br><br>
10. [Read About RTK Query](https://redux-toolkit.js.org/rtk-query/overview)