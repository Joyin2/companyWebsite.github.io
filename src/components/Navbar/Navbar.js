import React from "react";
import { NavLink } from "react-router-dom";
import Router from "../../routes/router";
function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <Router />
    </nav>
  );
}

export default Navbar;
