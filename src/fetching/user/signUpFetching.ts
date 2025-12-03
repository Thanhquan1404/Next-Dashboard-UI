"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { UserSignUpType } from "@/lib/data.user";
import { URL } from "@/lib/data"
// FETCHING DATA TYPE 
interface FetchingDataType {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}
// API - USER DATA TYPE
interface ApiUserData {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  avatarUrl: string | null;
}
// API - ERROR DATA TYPE
interface ApiErrorData {
  code: number,
  errorField: string,
  message: string,
}
// RESPONSE FROM SERVER DATA TYPE
interface ApiResponse {
  code: number;
  message?: string;
  data?: ApiUserData;
  error?: ApiErrorData[];
}

export const useSignUpFetching = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const userRegister = async (newUser: UserSignUpType) => {
    const payload: FetchingDataType = {
      username: newUser.userName,
      password: newUser.password,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      phoneNumber: newUser.phone,
      address: "",
    };

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<ApiResponse>(
        `${URL}/authentication/registration`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setData(response.data);
      return response.data;
    } catch (err) {
      const axiosErr = err as AxiosError<any>;
      const errData = axiosErr.response?.data?.error;
      const errMsg = `${errData[0]?.message}`;
      setError(errMsg);
      throw new Error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, userRegister };
};
