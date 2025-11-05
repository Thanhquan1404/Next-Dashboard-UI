import { useState } from "react";
import axios from "axios";
import { URL, UserSignUpType } from "@/lib/data";

interface fetchingDataType {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export const useSignUpFetching = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const userRegister = async (newUser: UserSignUpType) => {
    const path =`${URL}/crm/users/registration`;
    const payload: fetchingDataType = {
      username: newUser.userName,
      password: newUser.password,
      firstname: newUser.firstName,
      lastname: newUser.lastName,
      email: newUser.email,
      phoneNumber: newUser.phone,
      address: "",
    };

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${URL}/crm/users/registration`,
        payload,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
          // timeout: 10000, // optional: set timeout for slow server
        }
      );

      setData(response.data);
      return response.data;
    } catch (err: any) {
      console.error("Sign up error:", err);
      setError(err.message || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, userRegister };
};
