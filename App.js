import React from "react";
import ReactDOM from "react-dom";

const heading = (
    <h1 className="head" >
        Hello World using JSX
    </h1>);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);