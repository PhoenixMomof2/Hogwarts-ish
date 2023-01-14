import React from "react";
import { NavLink } from "react-router-dom";

    const linkStyles = {
      display: "inline",
      width: "50px",
      padding: "12px",
      margin: "0 6px 6px",
      background: "lightblue",
      textDecoration: "none",
      color: "black",
    };
    
     const NavBar = () => {
      return (
    <div>
      <NavLink
        to="/home"
        style={linkStyles}
        activeStyle={{
          background: "yellow",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/wizards"
        style={linkStyles}
        activeStyle={{
          background: "yellow",
        }}
      >
        Hogwarts-Ish Wizards
      </NavLink>
      <NavLink
        to="/spells"
        style={linkStyles}
        activeStyle={{
          background: "yellow",
        }}
      >
        Spells List
      </NavLink>
      <NavLink
        to="/wizards/new"
        style={linkStyles}
        activeStyle={{
          background: "yellow",
        }}
      >
        Create A Wizard
      </NavLink>
    </div>
  );
}

export default NavBar; 
