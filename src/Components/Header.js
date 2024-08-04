import logo from "../../images/download.png";
import { useState } from "react";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    console.log("Header Rendered");

    return (
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
                    <button onClick={() => {
                        setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
                    }}>
                        {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;
