import "../Login/Login.css";

import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signupHandler, error, setError, validateEmail, validatePassword } =
    useContext(AuthContext);
  const [userSignupDetails, setUserSignupDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCnfPassword, setShowCnfPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleCnfPasswordVisibility = () => {
    setShowCnfPassword(!showCnfPassword);
  };

  const handleInput = (e) => {
    setError("");
    setUserSignupDetails({
      ...userSignupDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (userSignupDetails.email === "") {
      setError("Email is required!");
      return;
    }

    if (userSignupDetails.password === "") {
      setError("Password is required!");
      return;
    }

    if (
      !validateEmail(userSignupDetails.email) ||
      !validatePassword(userSignupDetails.password)
    ) {
      setError("Email or password is not valid");
      return;
    }
    if (userSignupDetails.password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }
    signupHandler(userSignupDetails, () => {
      navigate("/");
    })
    console.log(userSignupDetails);
  };

  // // Function to handle test login and update state
  // const handleTestLogin = async () => {
  //   const testLogin = {
  //     email: "adarshbalika@gmail.com",
  //     password: "adarshbalika",
  //   };
  //   userSignupDetails(testLogin);

  //   try {
  //     await loginHandler(testLogin); // Use testLogin instead of userLoginDetails
  //     navigate(location?.state?.from?.pathname);
  //   } catch (error) {
  //     console.error("Login error:", error);
  //   }
  // };

  return (
    <>
      <div className="flex flex-col justify-center px-14 py-20 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-4xl font-[500] leading-9 tracking-tight text-gray-900 font-primary">
            KICKS.
          </h1>
          <h2 className="mt-10 text-center text-xl font-bold tracking-tight text-gray-900">
            Let the awesomeness begin 😉
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* form begins */}
          <form className="space-y-6" onSubmit={handleSignupSubmit}>
            <div className="flex gap-1">
              {/* firstname starts */}
              <div className="flex-1">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Firstname <span>*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    required
                    placeholder="Firstname"
                    className="input"
                    value={userSignupDetails.firstname}
                    onChange={handleInput}
                  />
                </div>
              </div>
              {/* firstname ends */}
              {/* lastname starts */}
              <div className="flex-1">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Lastname <span>*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    required
                    placeholder="Lastname"
                    className="input"
                    value={userSignupDetails.lastname}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
            {/* lastname ends */}
            {/* email starts */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address <span>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email address"
                  className="input"
                  value={userSignupDetails.email}
                  onChange={handleInput}
                />
              </div>
            </div>
            {/* email ends */}
            {/* password starts */}
            <div>
              <div className="flex items-center justify-between flex-wrap">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password <span>*</span>
                </label>
              </div>
              <div className="mt-2 relative">
                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer p-1 focus:outline-none focus:shadow-outline"
                  >
                    {showPassword ? (
                      <FaRegEyeSlash size={20} />
                    ) : (
                      <FaRegEye size={20} />
                    )}
                  </button>
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password (Min. 6 characters) "
                  className="input"
                  value={userSignupDetails.password}
                  onChange={handleInput}
                />
              </div>
            </div>
            {/* password ends */}
            {/* confirm password starts */}
            <div>
              <div className="flex items-center justify-between flex-wrap">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password <span>*</span>
                </label>
              </div>
              <div className="mt-2 relative">
                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <button
                    type="button"
                    className="cursor-pointer p-1 focus:outline-none focus:shadow-outline"
                    onClick={toggleCnfPasswordVisibility}
                  >
                    {showCnfPassword ? (
                      <FaRegEyeSlash size={20} />
                    ) : (
                      <FaRegEye size={20} />
                    )}
                  </button>
                </span>
                <input
                  id="cnfPassword"
                  name="cnfPassword"
                  type={showCnfPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password again "
                  className="input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            {/* confirm password ends */}
            {error ? (
              <p className="text-center text-sm text-red-600 font-bold p-0 m-0">
                {error}
              </p>
            ) : (
              ""
            )}

            <div className="flex gap-3 flex-col">
              <button type="submit" className="loginBtn">
                Register
              </button>
            </div>
          </form>
          {/* form ends */}
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <NavLink to="/login" className="links">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}
