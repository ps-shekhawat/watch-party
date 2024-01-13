import React, { useRef, useState } from "react";
import Header from "./Header";
import { supabase } from "../supabase/client";
import LoginModal from "./LoginModal";

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

      <LoginModal></LoginModal>
    </div>
  );
};

export default Login;
