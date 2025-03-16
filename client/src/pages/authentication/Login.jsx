import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLogindata] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLogindata({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(loginData);

  return (
    <div className="flex justify-center p-6 min-h-screen items-center">
      <div className="max-w-[40rem] w-full flex flex-col gap-5 p-6 bg-base-300 rounded-lg">
        <h2 className="text-2xl font-bold">Please Login..!!</h2>
        <label className="input input-bordered flex items-center gap-2 outline-none w-full focus-within:ring-0 focus-within:outline-none">
          <FaRegUser />
          <input
            type="text"
            name="username"
            className="grow outline-none focus:outline-none focus:ring-0 focus:border-gray-400"
            placeholder="Username"
            onChange={handleInputChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full focus-within:ring-0 focus-within:outline-none">
          <RiLockPasswordLine />
          <input
            type="password"
            name="password"
            className="grow"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </label>
        <button className="btn btn-primary">Login</button>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
