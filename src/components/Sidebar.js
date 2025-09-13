import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>MENU</h2>
      <ul>
        <li><NavLink to="/" >Dashboard</NavLink></li>
        <li><NavLink to="/sales">Sales</NavLink></li>
        <li><NavLink to="/inventory">Inventory</NavLink></li>
        <li><NavLink to="/customer">Customer</NavLink></li>
        <li><NavLink to="/reporting">Reporting</NavLink></li>
        <li><NavLink to="/ProductManagement">ProductManagement</NavLink></li>
      </ul>
    </div>
  );
}

export default Sidebar;
