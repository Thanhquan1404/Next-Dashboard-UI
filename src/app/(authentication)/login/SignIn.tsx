import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';

const SignIn = ({ isSignIn }: {isSignIn: boolean}) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(prev => !prev);
  }
  return (
    <div className="w-1/2 h-full px-10 flex flex-col justify-center space-y-5 absolute transition-all duration-700 ease-in-out left-[-50%]"
      style={{
        left: isSignIn ? "0" : "100%", 
        opacity: isSignIn ? 1 :0,
        // transform: isSignIn ? "translateX(0%)" : "translateX(-50%)",
        transition:
          `left 0.8s ease-in-out, transform 0.8s ease-in-out, ${ isSignIn ? 'opacity 1.5s ease-in-out' : 'opacity 0.15s ease-in-out'}`,
      }}
    >
      {/* Title */}
      <h1 className="font-michroma text-[28px] text-center text-white tracking-wide mb-4">
        Sign In
      </h1>

      {/* Social Icons */}
      <div className="flex flex-row items-center justify-center gap-5 mb-2">
        {[GitHubIcon, GoogleIcon, FacebookIcon, LinkedInIcon].map((Icon, i) => (
          <div
            key={i}
            className="w-[45px] h-[45px] rounded-lg bg-white/30 backdrop-blur-md flex items-center justify-center 
                   hover:bg-white hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
          >
            <Icon className="text-gray-700" />
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-300 text-center opacity-80 mb-4">
        or use your email and password
      </p>

      {/* Input: Email */}
      <div className="w-full h-[50px] bg-white rounded-md px-3 py-2 flex items-center gap-3 focus-within:ring-2 focus-within:ring-none transition-all duration-300">
        <EmailIcon className="text-gray-500" />
        <input
          type="text"
          placeholder="Email"
          className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
        />
      </div>

      {/* Input: Password */}
      <div className="w-full h-[50px] bg-white/90 rounded-md px-3 py-2 flex items-center gap-3 focus-within:ring-none focus-within:ring-blue-400 transition-all duration-300">
        {visible ? <VisibilityIcon className="text-gray-500 cursor-pointer" onClick={handleVisible} /> : <VisibilityOffIcon className="text-gray-500 cursor-pointer" onClick={handleVisible} />}
        <input
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
        />
      </div>

      {/* Forgot Password */}
      <p className="text-xs text-gray-300 text-center hover:text-white transition-colors duration-300 cursor-pointer">
        Forgot your password?
      </p>

      {/* Sign In Button */}
      <button
        className="mt-3 bg-white/30 text-white rounded-xl w-[120px] h-[40px] hover:bg-white hover:text-black 
               mx-auto shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
      >
        Sign In
      </button>
    </div>
  )
}

export default SignIn