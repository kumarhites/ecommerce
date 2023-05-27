import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Cart = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <h1>cart</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Cart;
