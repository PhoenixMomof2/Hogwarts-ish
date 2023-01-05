import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

 const NavBar = () => {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/wizards"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Hogwarts-Ish Wizards
      </NavLink>
      <NavLink
        to="/spells"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Spells List
      </NavLink>
    </div>
  );
}

export default NavBar;
