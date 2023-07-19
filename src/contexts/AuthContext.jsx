import { createContext, useState } from "react";
import { loginService } from "../services/LoginService/LoginService";
import { signUpService } from "../services/SignupService/SignupService";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState({
    login: false,
    signUp: false,
    signUpConfirm: false,
  });

  const [error, setError] = useState("");

  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));

  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLoginPassword = () =>
    setShowPassword({ ...showPassword, login: !showPassword.login });

  const loginHandler = async ({ email, password }) => {
    try {
      const response = await loginService(email, password);

      const {
        status,
        data: { foundUser, encodedToken },
      } = response;

      if (status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        localStorage.setItem("token", JSON.stringify(encodedToken));
        setCurrentUser(foundUser);
        setToken(encodedToken);
        toast.success("Successfully signed in!");
        navigate(location?.state?.from?.pathname ?? "/");
      }
    } catch (err) {
      const {
        response: { status },
      } = err;
      if (status === 401) {
        toast.error("Invalid email or password!");
      } else if (status === 404) {
        toast.error("User not registered!");
      } else {
        console.error(err.data);
        toast.error("Unable to signin!");
      }
    }
  };

  const toggleSignUpPassword = () =>
    setShowPassword({ ...showPassword, signUp: !showPassword.signUp });

  const toggleSignUpConfirmPassword = () =>
    setShowPassword({
      ...showPassword,
      signUpConfirm: !showPassword.signUpConfirm,
    });

  const signUpHandler = async ({
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      toast.error("Password fields are not matching!");
      navigate("/signup");
    } else {
      try {
        const response = await signUpService(
          firstname,
          lastname,
          email,
          password
        );

        const {
          status,
          data: { encodedToken },
        } = response;

        if (status === 201) {
          localStorage.setItem(
            "loginDetails",
            JSON.stringify({
              token: encodedToken,
            })
          );
          setToken(encodedToken);
          toast.success("Successfully signed up! Login to continue!");
          navigate("/login");
        }
      } catch (err) {
        const {
          response: { status },
        } = err;
        if (status === 422) {
          toast.error(
            "User email already exists! Please try signing up with another email!"
          );
        } else {
          console.error(err);
          toast.error("Unable to sign up!");
        }
      }
    }
  };

  const logoutHandler = () => {
    setToken(null);
    setCurrentUser(null);
    localStorage.removeItem("loginDetails");
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    navigate(location?.state?.from?.pathname ?? "/");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        setCurrentUser,
        showPassword,
        toggleLoginPassword,
        loginHandler,
        toggleSignUpPassword,
        toggleSignUpConfirmPassword,
        signUpHandler,
        logoutHandler,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
