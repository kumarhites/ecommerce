import { createContext, useEffect, useState } from "react";
import { loginService } from "../services/LoginService/LoginService";
import { signupService } from "../services/SignupService/SignupService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // form validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^\w{6,}$/;
    return passwordRegex.test(password);
  };

  const loginHandler = async ({ email, password }, callback) => {
    try {
      const response = await loginService(email, password);

      const {
        status,
        data: { foundUser, encodedToken },
      } = response;

      if (status === 200) {
        localStorage.setItem("token", encodedToken);
        setIsLoggedIn(localStorage.getItem("token") ? true : false);
        setLoginInput({ email: "", password: "" });
        console.log(foundUser, encodedToken);

        // Invoke the callback function after a successful login
        if (typeof callback === "function") {
          callback();
        }
      }
    } catch (error) {
      const errorType = "Auth";
      console.error(errorType, error);
      if (
        error.response.data.errors[0].includes("Unauthorized access error.")
      ) {
        setError("Invalid password");
      } else if (error.response.data.errors[0].includes("Not Found")) {
        setError("User not registered");
      }
    }
  };

  const signupHandler = async (
    { firstname, lastname, email, password },
    callback
  ) => {
    try {
      const response = await signupService(
        firstname,
        lastname,
        email,
        password
      );
      const {
        status,
        data: { createdUser, encodedToken },
      } = response;
      if (status === 201) {
        localStorage.setItem(
          "newUser",
          JSON.stringify({ createdUser, encodedToken })
        );
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("newUserFlag", 1)
        setIsLoggedIn(localStorage.getItem("token") ? true : false);
        //Invoke callback after successful signup
        if (typeof callback === "function") {
          callback();
        }
      }
    } catch (error) {
      const errorType = "Auth";
      console.error(errorType, error);
      console.log(error.response.data.errors[0]);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        loginHandler,
        loginInput,
        setLoginInput,
        error,
        setError,
        validatePassword,
        validateEmail,
        signupHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
