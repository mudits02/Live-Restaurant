# Basics of React

1. ***React.createElement*** is used in React to create elements , works the sam eway as in JS(using JS APIs) but behind the scenes works deifferently.<br><br>
2. 
```
    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World from Javascript";

        const root = document.getElementById("root");
        root.appendChild(heading);
    </script>
```
Above is used to print Hello World in in HTML using Javascript<br><br>

3. So , we see that for **createElement** we are using ***React*** because it is a core React operation and we are just creating the element but when we are creatinga root , then we use ***ReactDOM*** because we are rendering or changing something in the DOM.<br><br>
4. In React, the term ***root*** typically refers to the root DOM node that serves as the entry point for a React application. This is the DOM element where the React component tree is rendered. In a typical React application, this is done using the ***ReactDOM.createRoot*** or ***ReactDOM.render*** method in conjunction with a div element with an id attribute, often named "root" or "app."<br><br>
5. The empty object inside ***React.createElement()*** (second parameter) is the place where we pass the attributes we want to give to the React element for example id , class , styles , etc.<br><br>
6. React.CreateElement is basically an Object and it becomes an HTML at the behind by the React<br><br>
7. When we log the heading on the console , we find that it is basically ***createElement*** of JS being rendered in background , so at the end , React behind the scenes uses JS APIs to a great extent.<br><br>
8. Inside ***React.createElement()*** , the third arguement is the child of the element we are creating , so when we want ti create nested divs or something else , we just create the Element there.<br><br>
9. If we want to add multiple children in the third arguement of the ***React.createElement()*** , we can do it using an array.<br><br>
10. **React** is library and not a framework because it can work on a small portion or a separate portion of even a tag of HTML , so you need not to get the entire project to be loaded to use react , can be used in a single tag<br><br>