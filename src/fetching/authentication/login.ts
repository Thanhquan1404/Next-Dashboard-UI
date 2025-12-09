import { loginRequestType, loginResponseType } from "@/lib/data.authentication";
import { useState } from "react";

/** 
* API hook - user login
*/
const useLogin = () => {
  const [loading, setLoading] = useState(false);

  /** 
   * login - send data to api route to make communication with backend to login authentication 
   * @param data username - password 
   */
  const login = async (data: loginRequestType): Promise<loginResponseType> => {
    setLoading(true);

    try {
      const res = await fetch("/api/authentication/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      let result: any = null;
      try {
        result = await res.json();
      } catch {
        result = {};
      }

      console.log(result);

      if (!res.ok) {
        return {
          code: result?.code ?? res.status,
          message: result?.message ?? "Login failed",
          error: result?.error
            ? {
                code: result.error.code,
                message: result.error.message,
              }
            : undefined,
        };
      }

      return {
        code: result.code,
        message: result.message,
        data: {
          accessToken: result.data.accessToken,
          refreshToken: result.data.refreshToken,
          fullName: result.data.fullName,
          avatarUrl: result.data.avatarUrl,
        },
      };

    } catch {
      return {
        code: 500,
        message: "Network or server error",
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
  };
};

export default useLogin;
