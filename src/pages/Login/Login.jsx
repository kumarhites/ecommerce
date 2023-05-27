import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginHandler, error, setError, validateEmail, validatePassword } =
    useContext(AuthContext);
  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setError("");
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

    if (
      !validateEmail(userLoginDetails.email) ||
      !validatePassword(userLoginDetails.password)
    ) {
      setError("Email or password is not valid");
      return;
    }

    loginHandler(userLoginDetails, () => {
      navigate(location?.state?.from?.pathname);
    });
  };

  // Function to handle test login and update state
  const handleTestLogin = async () => {
    const testLogin = {
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    };
    setUserLoginDetails(testLogin);

    try {
      await loginHandler(testLogin); // Use testLogin instead of userLoginDetails
      navigate(location?.state?.from?.pathname);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
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
                <div className="text-sm">
                  <a className="links">Forgot password?</a>
                </div>
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
            {error ? (
              <p className="text-center text-sm text-red-600 font-bold p-0 m-0">
                {error}
              </p>
            ) : (
              ""
            )}

            <div className="flex gap-3 flex-col">
              <button type="submit" className="loginBtn">
                Sign in
              </button>
              <button
                type="submit"
                className="loginBtn"
                onClick={handleTestLogin}
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
