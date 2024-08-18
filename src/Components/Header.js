import logo from "../../images/download.png";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    console.log("Header Rendered");

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    const onlineStatus = useOnlineStatus();
    return (
        <header className="flex justify-between items-center bg-gradient-to-r from-orange-400 to-red-500 p-4 shadow-lg sticky top-0 z-50">
            <div className="logo-container">
                <Link to="/">
                    <img className="w-36 h-auto rounded-full border-4 border-white shadow-lg transform transition-transform hover:scale-110" src={logo} alt="restaurant_logo" />
                </Link>
            </div>

            <nav className="flex items-center space-x-8 text-white">
                <ul className="flex space-x-6 text-lg font-semibold">
                    <li className="flex items-center space-x-2">
                        <span className="hidden sm:inline">Online Status:</span> 
                        <span>{onlineStatus ? "🟢" : "🔴"}</span>
                    </li>
                    <li className="hover:text-gray-200 transform transition-transform hover:scale-105">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="hover:text-gray-200 transform transition-transform hover:scale-105">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-gray-200 transform transition-transform hover:scale-105">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="hover:text-gray-200 transform transition-transform hover:scale-105">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="hover:text-gray-200 transform transition-transform hover:scale-105">
                        Cart
                    </li>
                </ul>
                <button
                    onClick={() => {
                        setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
                    }}
                    className="bg-white text-orange-500 px-4 py-2 rounded-full shadow-md hover:bg-orange-500 hover:text-white transform transition-transform hover:scale-105"
                >
                    {loginBtn}
                </button>
            </nav>
        </header>
    );
}

export default Header;
