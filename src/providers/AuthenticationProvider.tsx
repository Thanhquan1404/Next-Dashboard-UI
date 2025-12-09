"use client"
import useLogin from "@/fetching/authentication/login";
import { loginRequestType } from "@/lib/data.authentication";
import { createContext, useContext } from "react";
import { useNotification } from "./NotificationProvider";
import useSignUp from "@/fetching/authentication/signUp";

interface AuthenticationConTextType {
  // FETCHING STATUS
  loginLoading: boolean,
  signUpLoading: boolean,

  // ACTIONS
  userLogin: (username: string, password: string) => Promise<boolean>,
  userSignUp: (username: string, password: string, firstName: string, lastName: string, email: string, phoneNumber: string, address?: string) => Promise<boolean>,
}

const AuthenticationContext = createContext<AuthenticationConTextType | null>(null);

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext)

  if (!context) {
    throw new Error("useAuthentication must be used with in AuthenticationProvider");
  }

  return context;
}

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

/**
 * Authentication Provider provide the ability to handle all authentication action in program, such as login, sign up, store accessToken or refreshToken
 * @param children ability to access context by its child component
 * @returns 
 */
export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  // PROVIDER
  const { showNotification } = useNotification();

  // API HOOK 
  const { loading: loginLoading, login } = useLogin();
  const { loading: signUpLoading, signUp } = useSignUp();

  /**
   * login - used to handle the client side when want to send the request to checking login status as well as receive user's token
   * @param username registered username
   * @param password registered password
   * @returns checking validation of username and password is true or not
   */
  const userLogin = async (username: string, password: string): Promise<boolean> => {
    try {
      const result = await login({ username, password } as loginRequestType);


      if (result.code !== 200) {
        showNotification(result.error?.message || "Login failed");
        return false;
      }

      console.log(result.data || "Can not find login data response");

      // STORE ACCESSTOKEN
      await fetch("api/set-token", {
        method: "POST",
        body: JSON.stringify({ token: result.data?.accessToken })
      })

      showNotification("Login successfully");
      return true;
    } catch (error) {
      showNotification(String(error), true);
    }
    return true;
  }

  const userSignUp = async (
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address?: string
  ): Promise<boolean> => {
    try {
      const result = await signUp({
        username,
        password,
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
      });

      console.log(result);

      if (result.code !== 200) {
        showNotification(result.message, true);
        return false;
      }

      showNotification("Sign up successful");
      return true;
    } catch {
      showNotification("Network or server error", true);
      return false;
    }
  };


  const value: AuthenticationConTextType = {
    // FETCHING STATUS
    loginLoading,
    signUpLoading,

    // ACTIONS
    userLogin,
    userSignUp
  }

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  )
}