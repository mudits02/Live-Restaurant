# React Functional Components

1. ***Functional Component*** are just normal Javascript functions which returns some piece of ***JSX***.<br><br>.
2. There are 2 types of compoenents -> 1. Functional and 2. Class Based.<br><br>
3. To render a ***Functional Component*** , we write <Name_of_the_comp /> inside the root.render() i.e. 
```
    root.render(<Name_of_the_comp />)
```
<br>
4. There can be 2 ways to write functional components first is 

```
    const HeaderComponent = () => {
    return(
        <div id="container">
            <h1>Hello World from functional Component</h1>
        </div>
)}
```

here , we wrap the JSX inside the round brackets and use **return** statement. But in this syntax , it is compulsory to use **return** statement or else it will give error. While instead of using return , we can use pure arrow function as well. Like in the following example is the second way of writing

```
    const TitleHeading = () => (
    <div id="title-container">
        <h2 className="title">Hello</h2>
    </div>
);
```

In this , we dont use return statement but directly use the arrow function and just wrap the ***JSX*** inside round brackets.<br><br>

5. ***Component Composition*** -> This term means when we are injecting one component into another component. Used the syntax as <Name_of_Component/> inside another component. Following is the syntax

```
    const HeaderComponent = () => {
    return(
        <div id="container">
            <TitleHeading/>
            <h1>Hello World from functional Component</h1>
        </div>
)}
```

6. We can also inject Plain javascript inside ***JSX*** , we kust have to use **{}** and we can write JS also inside the ***JSX***
```
  const HeaderComponent = () => {
    return(
        <div id="container">
            <h2>{console.log("Mudit Shukla")}</h2>
                {console.log("React is tough")}
            <h1>Hello World from functional Component</h1>
        </div>
)}  
```

7. How to inject a ***React Element*** inside of a ***React Functional Component*** , we use the {} but a bit differently

```
    const elem = <span>Hello From React Element</span>

    const HeaderComponent = () => {
    return(
        <div id="container">
            {elem}
            <h1>Hello World from functional Component</h1>
        </div>)
    }
```

So basically we take that React element , put it in a varibale and just component compose it using how we inject normal js i.e. using **{}**<br><br>

8. We can also inject a **Component** inside of an **Element** 
```
    const title = <h1 className="title"> Hellow World</h1>;

    const HeaderComponent = () => {
    return(
        <div id="container">
            <h1>Hello World from functional Component</h1>
        </div>)
    }

    const elem = (
        <h1 className="element">Hello</h1>
        {title} //rendering another element
        <HeaderComponent /> //rendering a component
    )

```

9. We can do ***Component Composition*** in 3 different ways 

```
    const HeaderComponent = () => {
    return(
        <div id="container">
            {Title()}
            <Title />
            <Title></Title>
            <h1>Hello World from functional Component</h1>
        </div>)
    }
```

in the above syntax of importing Component , all the 3 types of importing **Functional Component** is same.

10. ***JSX*** also protects us from from **Cross Site Scripting (XSS)**.<br><br>
11. ***XSS*** -> Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.<br><br>