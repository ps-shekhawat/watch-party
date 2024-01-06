import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <div className="fixed">
        <nav className="w-screen relative flex justify-between items-center">
          <div className="absolute bg-black/60 w-full h-full -z-10 backdrop-blur-sm"></div>
          <div className="pl-20 py-2.5 flex items-center">
            <div className="w-12">
              <Logo></Logo>
            </div>
            <span className="text-rose-600 pl-4 text-xl">Watch Party</span>
          </div>
          <div className="pr-12">
            <button className="text-white bg-rose-700 p-2 rounded-full">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
