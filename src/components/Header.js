import React from "react";
import {  NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className="header-container">
        <h3 className="header-container_logo"><NavLink to="/">BICYCLE TRACKER</NavLink></h3>
        <div className="header-container_info">
          <ul>
            <NavLink to="/login">
              <li>
                <button className="btn btn-login">Log in</button>
              </li>
            </NavLink>
            <NavLink to="/signup">
              <li>
                <button className="btn btn-signup">Sign up</button>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
