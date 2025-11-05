"use client";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Announcement from "./Announcement";
import { useState } from "react";

const LoginPage = () => {
  // STATE 
  const [isSignIn, setIsSignIn] = useState(true);
  // HANDLE WINDOW TRANSACTION FROM SIGN IN AND SIGN UP 
  const handleToggle = (): void => {setIsSignIn(prev => !prev)};

  return (
    // GENERAL CSS
    <div className="relative w-[100wh] h-[100vh] bg-cover bg-no-repeat bg-center bg-[url('/loginBackground.jpg')]"
    >
      <div className="w-[800px] h-[500px] bg-white/30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md backdrop-blur-xl">
        <div className="w-full h-full bg-transparent flex flex-row gap-6 relative overflow-hidden ">
          <SignIn isSignIn={isSignIn} />
          <Announcement handleToggle={handleToggle} isSignIn={isSignIn}/>
          <SignUp isSignIn={isSignIn} handleToggle={handleToggle}/>
        </div>
      </div>
    </div>
  );
}

export default LoginPage