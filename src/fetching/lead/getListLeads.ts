"use client";

import { getToken } from "@/service/localStorageService";
import { URL } from "@/lib/data";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { ApiResponseDataLeadType, leadStageType } from "@/lib/data.leads";

const path = `${URL}/leads`;
// API RESPONSE ERROR TYPE
interface ApiResponseError {
  code: number,
  message: string,
}
// API REPONSE DATA TYPE 
interface ApiReponseData {
  id: string,
  name: string,
  color: string,
  leads: ApiResponseDataLeadType[],
}
// API RESPONSE TYPE
interface ApiResponse {
  code: number,
  message: string,
  data?: ApiReponseData[],
  error?: any,
}

const useGetListLeads = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [accessToken, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(getToken() || null);
  }, []);
  const requestGetListLeads = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(path, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      const responseData: ApiResponse = response.data;
      const data: ApiReponseData[] = responseData.data ?? [];
      const leadStage = extractLeadStages(data);
      return { leadStage, data };
    } catch (err) {
      const axiosErr = err as AxiosError<any>;
      const errData: ApiResponseError = axiosErr.response?.data?.error;
      const errMessage = errData.message;
      throw new Error(errMessage);
    } finally {
      setLoading(false);
    }
  }

  return { loading, data, error, requestGetListLeads };
}

const extractLeadStages = (data: ApiReponseData[]): leadStageType[] => {
  return data.map(stage => ({
    id: stage.id,
    status: stage.name,
    color: stage.color || "#000",
  }));
}



export default useGetListLeads;