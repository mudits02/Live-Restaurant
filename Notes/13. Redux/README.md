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

7. 