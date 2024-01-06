import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative mix-blend-overlay font-mono">
      <div className="absolute z-10">
        <Header></Header>
      </div>

      <div className="bg-gradient-to-b from-black/[.6]">
        <img
          src="https://wallpapers.com/images/hd/hawkins-stranger-things-dxaviuaj5tmp5snh.jpg"
          alt="login-banner"
          className="-z-50 relative"
        ></img>
      </div>

      <div className="absolute w-96 bg-black/[.85] text-white top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 p-10">
        <h1 className="text-center text-3xl font-semibold mb-10 text-rose-600">
          Log In
        </h1>
        <form className="flex flex-col">
          <div className="mb-10 flex justify-between">
            <input
              className="p-2 bg-slate-800 text-white w-full"
              type="text"
              placeholder="Enter Email Id"
              id="email"
            ></input>
          </div>
          <div className="mb-10 flex justify-between">
            <input
              className="p-2 bg-slate-800 text-white w-full"
              type="password"
              placeholder="password"
              id="password"
            ></input>
          </div>
          <button className="text-white bg-rose-700 p-2 rounded-full">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
