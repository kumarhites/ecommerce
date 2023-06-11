import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./Login.css";

function Login() {
  const { loginHandler } = useContext(AuthContext);

  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });

  const guestUserDetails = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const handleInput = (e) =>
    setUserLoginDetails({
      ...userLoginDetails,
      [e.target.name]: e.target.value,
    });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginHandler(userLoginDetails);
  };
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{ top: "5%" }}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <div className="flex flex-col justify-center px-14 py-20 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-4xl font-[500] leading-9 tracking-tight text-gray-900 font-primary">
            KICKS.
          </h1>
          <h2 className="mt-10 text-center text-xl font-bold tracking-tight text-gray-900">
            Sign in to awesomeness 😉
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLoginSubmit}>
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
                  value={userLoginDetails.email}
                  onChange={handleInput}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between flex-wrap">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password <span>*</span>
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter yor password (Min. 6 characters) "
                  className="input"
                  value={userLoginDetails.password}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="flex gap-3 flex-col">
              <button type="submit" className="loginBtn">
                Sign in
              </button>
              <button
                type="submit"
                className="loginBtn"
                onClick={() => setUserLoginDetails(guestUserDetails)}
              >
                Sign in with Test Credentials
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <NavLink to="/signup" className="links">
              Signup
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
