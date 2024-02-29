import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header =() => {
    const [btnNameLogin, setbtnNameLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    //console.log(loggedInUser);

    //selector- subscribing to the store using the selector
    const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
        
    return(
      <div className="header flex justify-between m-2">
        <div className="logo-container">
            <img className="w-20" src={LOGO_URL } />
        </div>
        <div className="nav-items items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status: {onlineStatus ? "✅" : "❌"}
            </li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">
              <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            </li>
            <button className="login"
              onClick={() =>{
                btnNameLogin === "Login"
                ? setbtnNameLogin("Logout")
                : setbtnNameLogin("Login");
              }}
              >
                {btnNameLogin}
            </button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
};

export default Header;