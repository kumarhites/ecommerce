import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "./Wrapper";



const Navigation = () => {
  const [show, setShow] = useState("translate-y-0");
  return (
    <>
      {/* <NavLink to="/home" >Home</NavLink> || 
      <NavLink to="/cart" >Cart</NavLink> || 
      <NavLink to="/wishlist" >Wishlist</NavLink> || 
      <NavLink to="/test" >Test</NavLink> || 
      <NavLink to="/login" >Login</NavLink> */}
      <div className={`flex w-full bg-gray-900 h-14 px-24 md:h-20 items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
          <Wrapper>KICKS</Wrapper>
      </div>
    </>
  );
};

export default Navigation;
