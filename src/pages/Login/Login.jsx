import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginHandler, error,setError, validateEmail, validatePassword } = useContext(AuthContext);
  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setUserLoginDetails({
      ...userLoginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (userLoginDetails.email === "") {
      setError("Email is required!");
      return;
    }

    if (userLoginDetails.password === "") {
      setError("Password is required!");
      return;
    }

    if (!validateEmail(userLoginDetails.email) || !validatePassword(userLoginDetails.password)) {
      setError("Email or password is not valid");
      return;
    }

    loginHandler(userLoginDetails, () => {
      navigate(location?.state?.from?.pathname);
    });
  };

  return (
    <>
      <h1>Login form</h1>
      {error ? <p>{error}</p> : ""}
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">
          email:
          <input
            type="text"
            name="email"
            value={userLoginDetails.email}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            value={userLoginDetails.password}
            onChange={handleInput}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
}

export default Login;
