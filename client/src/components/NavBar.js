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
        to="/"
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
        to="/newWizard"
        style={linkStyles}
        activeStyle={{
          background: "yellow",
        }}
      >
        Creat A Wizard
      </NavLink>
    </div>
  );
}

export default NavBar; 

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function NavBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }