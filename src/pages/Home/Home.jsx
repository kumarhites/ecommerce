import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


const Home = () => {

  const { isLoggedIn, name, setIsLoggedIn } = useContext(AuthContext);
  const handleLoginBtnClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const handleLogoutBtnClick = () => {};
  return (
    <div>
      <h1>test logout on homepage {name}</h1>
      <button onClick={handleLoginBtnClick}>Logout</button>
      <button onClick={handleLogoutBtnClick}>Login</button>
    </div>
  );
};

export default Home;
