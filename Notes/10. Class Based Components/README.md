# Class Based Components

1. When we are doing 

```
this.state{
    count : 0, 
    count2 : 2,
}
```

But in **functional** components we declare them individually , but in the background , **react** basically keeps the track of the state variables declared in a single object.<br><br>

2. We can never update a state vaiable directly. We have to use ***this.setState()***.
3. Even in this , whenever we are count++ is happening , react is re rendering the component<br><br>

---

## Life Cycle of Class Based Components

1. Whenever a class is instantiated , then the constructor is called , so in class based comp. also , whenever the comp. is called , the constructor is called first;<br><br>
2. So , in react class comp. lifecycle , first **constructor** is called then the **render()** method is called and then **ComponentDidMount()** is called.<br><br>
3. Following is the output exaplaining the lifecycle in a class based comp

![Class Based Lifecycle](https://github.com/mudits02/Live-Restaurant/blob/master/images/Screenshot%202024-08-11%20at%2010.22.43%E2%80%AFPM.png)

4. First Parent class is called , as soon as it is called , constructor is called and then the render mentod is called ,  inside render method , react compiler sees that anohter child class comp is present and that is to be called , the we see that Child contructor , render is called and finally first the child comp is Mounted(Did mount means when the component is rendered and put on the web view) and finally the Parent DidMount is called.<br><br>
5. That is why we do API calls inside the ComponentDidMount() only (ofc using useEffect()).<br><br>
6. We do it inside the **ComponentDidMount()** only because we follow the principle that first the comp is rendered and the we put the Data from the API call. So , since **ComponentDidMount** happens after the render method is called , it is the best place to do an API call.<br><br>
7. Refer this for the [React lifecycle diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)<br><br>

8. Output will be in the following order
   - Parent Constructor
   - Parent Render
         - Child 1 Constrcutor
         - Child 1 Render
         - Child 2 Constrcutor
         - Child 2 Render
       - Child 1 Did Mount
       - Child 2 Did Mount
    - Parent Did Mount

9. This is done as an optimization that React lifecycle wants to first execute the **render phase** of the components fully and only then get to the **commit phase** where the actual **DOM** manipulation is done and then it is Mounted on the Web View(**DidMount** Called). <br><br>
10. This is because React batches all the chilren and want that **render phase** is completed at once because once the **commit phase** starts , it is computationally expensive because **DOM Manipulation** is the most expensive process for a browser.<br><br>
11. In **About** page , first the dummy data was rendered and then **DidMount()** was called which replaced the default data as there was API call inside the **DidMount()** and then it is replaced (same logic of using react diff).<br><br>

