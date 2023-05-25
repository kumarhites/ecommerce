import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Test = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    const handleLogoutBtn = () => {
        setIsLoggedIn(!isLoggedIn)
    }
  return (
    <div>
        <h1>Test Logout on private routes</h1>
      <button onClick={handleLogoutBtn}>Logout</button>
    </div>
  );
};

export default Test;
