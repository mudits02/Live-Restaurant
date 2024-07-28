import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/download.png"


const styleCard = {
    backgroundColor : "#f0f0f0",
}

const RestaurantCard = (props) => {
    console.log(props);
    const {resData} = props;
    return(
        <div className="res-card" style={styleCard}>
            <img 
                className="res-logo"
                alt="logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
                    resData.data.cloudinaryImageId}
            />
            <h3>{resData.data.resName}</h3>
            <h4>{resData.data.cuisines.join(", ")}</h4>
            <h4>{resData.data.deliveryTime}</h4>
            <h4>{resData.data.rating}</h4>
        </div>
    )
}

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="restaurant_logo" /> 
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData = {resObj}/>
                
            </div>
        </div>
    )
}

const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);