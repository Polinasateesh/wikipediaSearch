import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const NavBar = () => {
  const location = useLocation();
  const jwtToken = window.localStorage.getItem('jwtToken');

  if (jwtToken) {
    return (
      
        <Toolbar style={{ justifyContent: "flex-end" }}>
          {location.pathname !== "/" && (
            <Button
              color="secondary"
              variant="contained"
              component={Link}
              to={location.pathname === "/wiki" ? "/dashboard" : "/wiki"}
            >
              {location.pathname === "/wiki" ? "Dashboard" : "Home"}
            </Button>
          )}
        </Toolbar>
      
    );
  } else {
    return null;
  }
};

export default NavBar;
