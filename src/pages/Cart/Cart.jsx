import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Cart = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(localStorage.getItem("token") ? true : false);
  };
  return (
    <div>
      <h1>cart</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Cart;
