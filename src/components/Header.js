import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    const [btnName,setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button 
                        className="Login" 
                        onClick={()=>{
                            setBtnName("Logout");
                            console.log(btnName);
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;