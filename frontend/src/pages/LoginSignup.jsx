import React, { useState } from "react";

const LoginSignup = () => {
  const [State, setState] = useState("Login");
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const Login = async (e) => {
    e.preventDefault();

    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FormData),
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      localStorage.setItem("authToken", responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.message);
    }
  };

  const SignUp = async (e) => {
    e.preventDefault();

    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FormData),
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      localStorage.setItem("authToken", responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.message);
    }
  };

  return (
    <div className="LoginSignUp flex items-center justify-center min-h-screen bg-gray-100">
      <div className="LoginSignUp-container w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {State}
        </h1>

        {/* Form */}
        <form action=""  className="flex flex-col gap-4">
          {State === "Sign Up" ? (
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              value={FormData.name}
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            onChange={changeHandler}
            value={FormData.email}
            placeholder="Email Address"
            name="email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="password"
            onChange={changeHandler}
            value={FormData.password}
            name="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
          <button
            onClick={(e) => {
              State === "Login" ? Login(e) : SignUp(e);
            }}
            className="bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 cursor-pointer transition"
          >
            Continue
          </button>
        </form>

        {/* Already have an account */}
        {State === "Login" ? (
          <p className="mt-4 text-sm text-gray-600 text-center">
            Create new account?
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-4 text-sm text-gray-600 text-center">
            Already have an account?
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        )}

        {/* Terms and Conditions */}
        <div className="mt-4 flex items-start gap-2">
          <input type="checkbox" id="terms" className="mt-1" />
          <label htmlFor="terms" className="text-sm text-gray-600">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
