import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import { UserSignUpType } from '@/lib/data';
import { useSignUpFetching } from '@/fetching/user/signUpFetching';
import FetchingLoadingStatus from '../../../components/FetchingLoadingStatus';
interface Props {
  isSignIn: boolean;
  handleToggle: () => void;
}

// CHECK SIGN UP DATA FIELDS
const checkSignUpInput = (newSignUp: UserSignUpType): boolean => {
  const { firstName, lastName, userName, phone, email, password } = newSignUp;

  // Helper regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{9,11}$/; // allow 9–11 digits
  const usernameRegex = /^[a-zA-Z0-9._-]{3,20}$/;

  // Check required fields are not empty
  if (!firstName.trim() || !lastName.trim() || !userName.trim() || !phone.trim() || !email.trim() || !password.trim()) {
    alert("Some fields are empty.");
    return false;
  }

  // Validate username format
  if (!usernameRegex.test(userName)) {
    alert("Invalid username format. Only letters, numbers, dot, underscore, and hyphen allowed (3–20 chars).");
    return false;
  }

  // Validate phone format
  if (!phoneRegex.test(phone)) {
    alert("Invalid phone number. Must be 9–11 digits.");
    return false;
  }

  // Validate email format
  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return false;
  }

  // Validate password length
  if (password.length < 6) {
    alert("Password too short. Must be at least 6 characters.");
    return false;
  }

  return true;
};

const SignUp = ({ isSignIn, handleToggle }: Props) => {
  // INITALIZE USER SIGN UP FETCHING 
  const { loading, data, error, userRegister } = useSignUpFetching();

  const [visible, setVisible] = useState(false);
  const handleVisible = () => setVisible((prev) => !prev);
  // SIGN UP FETCHING PROCESS
  const [isSignUpProcess, setIsSignUpProcess] = useState<boolean>(false);

  // STATE 
  const [inputFirstName, setInputFirstName] = useState<string>("");
  const [inputLastName, setInputLastName] = useState<string>("");
  const [inputUserName, setInputUserName] = useState<string>("");
  const [inputPhone, setInputPhone] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  // RESET ALL STATE FIELDS 
  const resetStateField = () => {
    setInputFirstName("");
    setInputLastName("");
    setInputUserName("");
    setInputPhone("");
    setInputEmail("");
    setInputPassword("");
  }

  // HANDLE SUBMIT BUTTON 
  const handleSubmitButton = async () => {
    const newSignUpInput: UserSignUpType = {
      firstName: inputFirstName,
      lastName: inputLastName,
      userName: inputUserName,
      phone: inputPhone,
      email: inputEmail,
      password: inputPassword,
    };

    if (!checkSignUpInput(newSignUpInput)) {
      return;
    } 

    try {
      await userRegister(newSignUpInput);

      if (data?.code === 200) {
        alert("You have signed up successfully!");
        resetStateField();
        handleToggle();
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (err: any) {
      alert(`Registration failed \n${`${err}` || "Unknown error"}`);
    }
  }

  return (
    <div
      className="w-1/2 h-full px-10 flex flex-col justify-center space-y-5 absolute transition-all duration-700 ease-in-out"
      style={{
        left: isSignIn ? "-100%" : "50%",
        opacity: isSignIn ? 0 : 1,
        transition:
          `left 0.8s ease-in-out, transform 0.8s ease-in-out, ${isSignIn ? 'opacity 0.15s ease-in-out' : 'opacity 1.5s ease-in-out'}`,
      }}
    >
      <h1 className="font-michroma text-[28px] text-center text-white tracking-wide mb-2">
        Sign Up
      </h1>
      <p className="text-xs text-gray-300 text-center opacity-80 mb-4">
        or use your email for registration
      </p>

      {/* FIRST + LAST NAME */}
      <div className="flex flex-row gap-4">
        <div className="w-1/2 h-[40px] bg-white rounded-md px-3 py-2 flex items-center gap-3">
          <input
            disabled={loading}
            type="text"
            placeholder="First name"
            value={inputFirstName}
            onChange={(e) => setInputFirstName(e.target.value)}
            className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
          />
        </div>
        <div className="w-1/2 h-[40px] bg-white rounded-md px-3 py-2 flex items-center gap-3">
          <input
            disabled={loading}
            type="text"
            placeholder="Last name"
            value={inputLastName}
            onChange={(e) => setInputLastName(e.target.value)}
            className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
          />
        </div>
      </div>

      {/* USERNAME */}
      <div className="w-full h-[40px] bg-white rounded-md px-3 py-2 flex items-center gap-3">
        <PersonIcon className="text-gray-500" />
        <input
          disabled={loading}
          type="text"
          placeholder="Username"
          value={inputUserName}
          onChange={(e) => setInputUserName(e.target.value)}
          className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
        />
      </div>

      {/* PHONE */}
      <div className="w-full h-[40px] bg-white rounded-md px-3 py-2 flex items-center gap-3">
        <PhoneIphoneIcon className="text-gray-500" />
        <input
          disabled={loading}
          type="text"
          placeholder="Phone"
          value={inputPhone}
          onChange={(e) => setInputPhone(e.target.value)}
          className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
        />
      </div>

      {/* EMAIL */}
      <div className="w-full h-[40px] bg-white rounded-md px-3 py-2 flex items-center gap-3">
        <EmailIcon className="text-gray-500" />
        <input
          disabled={loading}
          type="text"
          placeholder="Email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
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
          disabled={loading}
          type={visible ? "text" : "password"}
          placeholder="Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
        />
      </div>

      {/* BUTTON */}
      {loading ? (
        <FetchingLoadingStatus loading={loading} />
      ) : (
        <button
          disabled={loading}
          className={`mt-3 bg-white/30 text-white rounded-xl w-[120px] h-[40px]
                     ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black"}
                     mx-auto shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold`}
          onClick={handleSubmitButton}
        >
          Sign Up
        </button>
      )}
    </div>
  );
};

export default SignUp;
