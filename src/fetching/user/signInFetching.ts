import { useState } from 'react';
import { URL, userLoginType } from '@/lib/data';
import axios, { AxiosError } from 'axios';

// FETCHING URL PATH
const path = `${URL}/crm/auth/login`;

// FETCHING DATA TYPE
interface ApiResquest {
  username: string;
  password: string;
};

// ERROR RESPONSE DATA TYPE 
interface ErrorResponse {
  code: number;
  message: string;
}

// DATA RESPONSE TYPE
interface DataResponse {
  accessToken: string;
  authenticated: boolean;
}
// RESPONSE TYPE
interface ApiResponse {
  code: number;
  message?: string;
  error?: ErrorResponse[];
  data?: DataResponse;
}

const useSignInFetching = () => {
  // STATE 
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<ErrorResponse[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const userLogin = async (userLogin: userLoginType) => {
    const payload: ApiResquest = {
      username: userLogin.username,
      password: userLogin.password,
    };

    setError(null);
    setLoading(true);

    try {
      const response = await axios.post<ApiResponse>(path, payload, {
        headers: {
          "Content-Type": "application/json",
        }
      });

      setData(response?.data);
      return response; // ALLOW USER TO MAKE FURTHER ACTION
    } catch (err) {
      const axiosErr = err as AxiosError<any>;
      const errData: ErrorResponse = axiosErr.response?.data?.error;
      const errMessage = errData.message;
      throw new Error(errMessage);
    } finally {
      setLoading(false);
    }
  }

  return { loading, data, error, userLogin };
}

export default useSignInFetching;