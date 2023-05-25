import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink to="/home" >Home</NavLink> || 
      <NavLink to="/cart" >Cart</NavLink> || 
      <NavLink to="/wishlist" >Wishlist</NavLink> || 
      <NavLink to="/test" >Test</NavLink> || 
      <NavLink to="/login" >Login</NavLink>
    </>
  );
};

export default Navigation;
