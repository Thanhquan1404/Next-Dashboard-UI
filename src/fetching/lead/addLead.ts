"use client";

import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { leadType } from "@/lib/data.leads";
import { getToken } from "@/service/localStorageService";
import { URL, ApiResponseError, ApiResponse } from "@/lib/data";

const path = `${URL}/leads`;

const useAddLead = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const [accessToken, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(getToken() || null);
  }, []);

  const addLead = async (newLead: leadType, stageID: string): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      const payload = makePayload(newLead);

      const response = await axios.post(
        `${path}/${stageID}/stage`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const resData: ApiResponse = response.data;
      return resData.code === 200;
    } catch (err) {
      const errAxios = err as AxiosError<any>;
      const errList: ApiResponseError[] = errAxios.response?.data?.error;

      const errMessage =
        errList?.[0]?.message ||
        errAxios.response?.data?.message ||
        errAxios.message ||
        "Unknown error";

      throw new Error(errMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, addLead };
};

const makePayload = (newLead: leadType) => {
  const payload = new FormData();
  payload.append("fullName", newLead.name);
  payload.append("email", newLead.email);
  payload.append("phoneNumber", newLead.phone);
  payload.append("rating", String(newLead.rating));
  return payload;
};

export default useAddLead;
