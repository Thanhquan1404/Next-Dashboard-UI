"use client";
import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PasswordIcon from "@mui/icons-material/Password";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PersonIcon from "@mui/icons-material/Person";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleToggle = () => setIsSignUp(!isSignUp);
  const handleVisible = () => setVisible((prev) => !prev);

  return (
    <div
      className="w-[100vw] h-[100vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/loginBackground.jpg')",
      }}
    >
      {/* Main Container */}
      <div
        className="
          w-[700px] 
          h-[500px] 
          bg-white/30     
          rounded-xl
          backdrop-blur-md
          border border-white/30 
          shadow-lg
          overflow-hidden
          relative
        "
      >
        {/* Inner Wrapper for animation */}
        <div
          className={`flex w-[1400px] h-full transition-transform duration-700 ease-in-out ${
            isSignUp ? "-translate-x-[700px]" : "translate-x-0"
          }`}
        >
          {/* ========== SIGN IN + ANNOUNCEMENT (LEFT HALF) ========== */}
          <div className="w-[700px] flex flex-row h-full">
            {/* SIGN IN FORM */}
            <div className="w-1/2 h-full px-10 flex flex-col justify-center space-y-5 z-10">
              <h1 className="font-michroma text-[28px] text-center text-white tracking-wide mb-4">
                Sign In
              </h1>

              <div className="flex flex-row items-center justify-center gap-5 mb-2">
                {[GitHubIcon, GoogleIcon, FacebookIcon, LinkedInIcon].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-[45px] h-[45px] rounded-lg bg-white/30 backdrop-blur-md flex items-center justify-center 
                     hover:bg-white hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      <Icon className="text-gray-700" />
                    </div>
                  )
                )}
              </div>

              <p className="text-xs text-gray-300 text-center opacity-80 mb-4">
                or use your email and password
              </p>

              {/* Email Input */}
              <div className="w-full h-[50px] bg-white/90 rounded-md px-3 py-2 flex items-center gap-3 focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-300">
                <EmailIcon className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                />
              </div>

              {/* Password Input */}
              <div className="w-full h-[50px] bg-white/90 rounded-md px-3 py-2 flex items-center gap-3 focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-300">
                {visible ? (
                  <VisibilityIcon
                    className="text-gray-500 cursor-pointer"
                    onClick={handleVisible}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="text-gray-500 cursor-pointer"
                    onClick={handleVisible}
                  />
                )}
                <input
                  type={visible ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                />
              </div>

              <p className="text-xs text-gray-300 text-center hover:text-white transition-colors duration-300 cursor-pointer">
                Forgot your password?
              </p>

              <button
                className="mt-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-xl w-[120px] h-[40px] 
             mx-auto shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
              >
                Sign In
              </button>
            </div>

            {/* ANNOUNCEMENT PANEL */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center px-10 text-center space-y-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 text-white rounded-tl-[60px] rounded-bl-[60px] shadow-xl z-20">
              <h1 className="text-4xl font-bold tracking-wide drop-shadow-md">
                Hello, Friend!
              </h1>
              <h3 className="text-base font-light text-white/90 leading-relaxed max-w-[300px]">
                Register with your personal details to use all of our site
                features.
              </h3>
              <button
                onClick={handleToggle}
                className="mt-4 px-8 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-purple-100 transition-all duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* ========== SIGN UP SIDE (RIGHT HALF) ========== */}
          <div className="w-[700px] flex flex-col justify-center items-center relative">
            <div className="w-1/2 flex flex-col space-y-4">
              <h1 className="font-michroma text-[26px] text-center text-white tracking-wide mb-2">
                Create Account
              </h1>

              {/* Name Inputs */}
              <div className="flex gap-3">
                <div className="w-1/2 h-[45px] bg-white/90 text-sm rounded-md px-3 py-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-purple-400 transition-all duration-300">
                  <PersonIcon className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                  />
                </div>
                <div className="w-1/2 h-[45px] bg-white/90 text-sm rounded-md px-3 py-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-purple-400 transition-all duration-300">
                  <PersonIcon className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="w-full h-[45px] bg-white/90 text-sm rounded-md px-3 py-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-purple-400 transition-all duration-300">
                <PhoneAndroidIcon className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                />
              </div>

              {/* Email */}
              <div className="w-full h-[45px] bg-white/90 text-sm rounded-md px-3 py-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-purple-400 transition-all duration-300">
                <EmailIcon className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                />
              </div>

              {/* Password */}
              <div className="w-full h-[45px] bg-white/90 text-sm rounded-md px-3 py-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-purple-400 transition-all duration-300">
                <PasswordIcon className="text-gray-500" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                />
              </div>
              <p onClick={handleToggle} className="text-center text-xs text-gray-400 hover:text-white cursor-pointer">Already have account? </p>
              <button
                className="mt-3 bg-gradient-to-r from-indigo-400 to-pink-500 text-white font-semibold rounded-xl w-[140px] h-[45px] mx-auto shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
