import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';

const SignUp = ({ isSignIn }: { isSignIn: boolean }) => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => setVisible((prev) => !prev);

  return (
    <div
      className="w-1/2 h-full px-10 flex flex-col justify-center space-y-5 absolute transition-all duration-700 ease-in-out"
      style={{
        left: isSignIn ? "-100%": "50%" ,
        opacity: isSignIn ? 0 : 1,
        // transform: isSignIn ? "translateX(0%)" : "translateX(-50%)",
        transition:
          `left 0.8s ease-in-out, transform 0.8s ease-in-out, ${isSignIn ? 'opacity 0.15s ease-in-out' : 'opacity 1.5s ease-in-out'}`,
      }}
    >
      {/* Title */}
      <h1 className="font-michroma text-[28px] text-center text-white tracking-wide mb-2">
        Sign Up
      </h1>

      <p className="text-xs text-gray-300 text-center opacity-80 mb-4">
        or use your email for registration
      </p>

      {/* FIRST NAME / LAST NAME */}
      <div className="flex flex-row gap-4">
        <div className="w-1/2 h-[40px] bg-white rounded-md px-3 py-2 flex items-center gap-3">
          <input
            type="text"
            placeholder="First name"
            className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
          />
        </div>
        <div className="w-1/2 h-[40px] bg-white rounded-md px-3 py-2 flex items-center gap-3">
          <input
            type="text"
            placeholder="Last name"
            className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
          />
        </div>
      </div>

      {/* PHONE */}
      <div className="w-full h-[40px] bg-white rounded-md px-3 py-2 flex items-center gap-3">
        <PhoneIphoneIcon className="text-gray-500" />
        <input
          type="text"
          placeholder="Phone"
          className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
        />
      </div>

      {/* EMAIL */}
      <div className="w-full h-[40px] bg-white rounded-md px-3 py-2 flex items-center gap-3">
        <EmailIcon className="text-gray-500" />
        <input
          type="text"
          placeholder="Email"
          className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
        />
      </div>

      {/* PASSWORD */}
      <div className="w-full h-[40px] bg-white/90 rounded-md px-3 py-2 flex items-center gap-3">
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

      {/* BUTTON */}
      <button
        className="mt-3 bg-white/30 text-white rounded-xl w-[120px] h-[40px] hover:bg-white hover:text-black 
               mx-auto shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
