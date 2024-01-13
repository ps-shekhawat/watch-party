import React from "react";
import Header from "./Header";
import SignUpModal from "./SignUpModal";

const SignUp = () => {
  return (
    <div className="h-screen">
      <Header></Header>
      <div className="flex h-full">
        <div className="h-screen w-1/2 relative">
          <SignUpModal></SignUpModal>
          <img
            src="https://wallpapers.com/images/featured/money-heist-segtwbhffwy01w82.jpg"
            alt="GOT"
            className="h-full object-cover"
          ></img>
        </div>
        <div className="w-1/2">
          <img
            src="https://wallpapercave.com/wp/wp6415657.jpg"
            alt="GOT"
            className="h-full object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
