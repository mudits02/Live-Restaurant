import logo from "../../images/download.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";


const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    console.log("Header Rendered");

    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="restaurant_logo" /> 
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                    <Link to="/">Home</Link> 
                    </li>
                    <li>
                        <Link to="/about" >About us</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact us </Link>
                    </li>
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
