import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName,setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();
    
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
            <div className="logo-container">
                <img
                    className="w-56"
                    src={LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "❌"}
                    </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/grocery">Cart</Link></li>
                    <li className="px-4">
                        <button 
                            className="login" 
                            onClick={()=>{
                                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                            }}
                        >
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
