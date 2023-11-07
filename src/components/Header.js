import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const getActive = ({ isActive }) =>
    isActive
      ? {
          color: "red",
          fontSize: "20px",
          fontWeight: "500",
        }
      : {};

  return (
    <div>
      <h1>My Mail Box</h1>
      <ul>
        <li>
          <NavLink className="nav-link" style={getActive} to="/inbox">
            Inbox
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" style={getActive} to="/sent">
            Sent
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
