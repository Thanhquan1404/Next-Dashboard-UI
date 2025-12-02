import axios, { AxiosError } from "axios";
import { useState } from "react";
import { URL } from "@/lib/data";
import { getToken } from "@/service/localStorageService";

const path = `${URL}/products/`;

// ERROR REPONSE 
interface ErrorResponse {
  code: number,
  message: string,
}
// API RESPONSE
interface ApiResponse {
  code: number,
  message: string,
  error?: ErrorResponse,
}
const useDeleteProduct = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResponse | null>();
    const accessToken = getToken();
  
  const deleteProduct = async (productID: string) => {
    const pathWithProductID = path + productID;
    setError(null);
    setLoading(true);
    try {
      const reponse = await axios.delete(pathWithProductID, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const resData: ApiResponse = reponse.data;
      return resData;
    } catch (err) {
      const axiosErr = err as AxiosError<any>
      const errData: ErrorResponse = axiosErr.response?.data.error;
      const errMess = errData.message;
      setError(errData);
      throw new Error(errMess);
    } finally{
      setLoading(false);
    }
  }
  return {loading, error, deleteProduct};
}

export default useDeleteProduct;