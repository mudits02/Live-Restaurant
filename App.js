import React from "react";
import ReactDOM from "react-dom";


const TitleHeading = () => (
    <div id="title-container">
        <h2 className="title">Hello</h2>
    </div>
);

const HeaderComponent = () => {
    return(
        <div id="container">
            <TitleHeading/>
            <h1>Hello World from functional Component</h1>
        </div>
)}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);