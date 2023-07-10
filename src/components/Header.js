import React from "react";
import { LOGO_IMG } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_IMG} alt="logo" />

      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li> Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
