import { useState } from "react";
import { ApiResponse, ApiResponseError, URL } from "@/lib/data";
import axios, { AxiosError } from "axios";
import { getToken } from "@/service/localStorageService";

const path = `${URL}/leads`;

const useUpdateLeadStage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();

  const accessToken = getToken();
  const updateLeadStage = async (leadID: string, forwardStageID: string) => {
    setError(null);
    setLoading(true);

    try {
      const payload = {
        stageId: forwardStageID,
      };
      // console.log("payload: ", payload);
      // console.log(`${path}/leads/${leadID}/stage`);
      const res = await axios.patch(`${path}/${leadID}/stage`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      const response: ApiResponse = res.data;
      return response.code === 200;
    } catch (err) {
      const errAxios = err as AxiosError<any>;
      const errData = errAxios.response?.data;
      const errMes: ApiResponseError = errData.error;
      throw new Error(errMes.message);
    }
  }

  return {loading, data, error, updateLeadStage};
}

export default useUpdateLeadStage;