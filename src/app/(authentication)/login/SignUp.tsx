"use client";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PersonIcon from '@mui/icons-material/Person';

const SignUp = () => {
  return (
    <div>
      {/* Default Container */}
      <div className="py-5 px-5 flex flex-col justify-center space-y-5 absolute right-[-50%] z-1">
        
        {/* Title */}
        <h1 className="font-michroma text-[20px] text-center text-white tracking-wide mb-2">
          Create Account
        </h1>

        {/* Social Icons */}
        <div className="flex flex-row items-center justify-center gap-5 mb-3">
          {[GitHubIcon, GoogleIcon, FacebookIcon, LinkedInIcon].map((Icon, i) => (
            <div
              key={i}
              className="w-[40px] h-[40px] rounded-lg bg-white/30 backdrop-blur-md flex items-center justify-center 
                hover:bg-white hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
            >
              <Icon className="text-gray-700" />
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-100 text-center opacity-80">
          or use your email for registration
        </p>

        {/* Name Inputs */}
        <div className="flex gap-3">
          <div className="w-1/2 h-[35px] bg-white/90 text-xs rounded-md px-3 py-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-purple-400 transition-all duration-300">
            <PersonIcon className="text-gray-500" />
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
            />
          </div>

          <div className="w-1/2 h-[35px] bg-white/90 text-xs rounded-md px-3 py-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-purple-400 transition-all duration-300">
            <PersonIcon className="text-gray-500" />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="w-full h-[35px] bg-white/90 text-xs rounded-md px-3 py-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-purple-400 transition-all duration-300">
          <PhoneAndroidIcon className="text-gray-500" />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
          />
        </div>

        {/* Email */}
        <div className="w-full h-[35px] bg-white/90 text-xs rounded-md px-3 py-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-purple-400 transition-all duration-300">
          <EmailIcon className="text-gray-500" />
          <input
            type="text"
            placeholder="Email"
            className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
          />
        </div>

        {/* Password */}
        <div className="w-full h-[35px] bg-white/90 text-xs rounded-md px-3 py-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-purple-400 transition-all duration-300">
          <PasswordIcon className="text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
          />
        </div>

        {/* Sign Up Button */}
        <button
          className="mt-4 bg-gradient-to-r from-indigo-400 to-pink-500 text-white font-semibold rounded-xl w-[120px] h-[40px] 
          mx-auto shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
