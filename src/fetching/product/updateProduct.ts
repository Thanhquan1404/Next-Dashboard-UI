import { URL } from "@/lib/data";
import { getToken } from "@/service/localStorageService";
import axios, { AxiosError } from "axios";
import { useState } from "react";

// API DATA RESPONSE 
interface ApiDataResponseType {
  productId: string;
  sku: string;
  productName: string;
  description: string;
  productSubtitle: string;
  productBrand: string;
  productCategory: string;
  quantity: number;
  status: string;
  purchaseUnitPrice: number;
  discount: number;
  discountType: string;
  imageUrl: string;
}
// API ERROR TYPE
interface ApiErrorResponseType {
  code: number;
  message: string;
}
// API RESPONSE
interface ApiResponse {
  code: number,
  message: string,
  error?: ApiErrorResponseType,
  data?: ApiDataResponseType,
}
const useUpdateProduct = () => {
  // STATE
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ApiDataResponseType>();
  const [error, setError] = useState<ApiErrorResponseType | null>();
  const accessToken = getToken();

  // FETCHING FUNCTIOn
  const updateProduct = async (updateProductDetail: any, productID: string) => {
    const path = `${URL}/products/${productID}`;
    setError(null);
    setLoading(true);

    try {
      const response = await axios.put(path, updateProductDetail, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const resData: ApiResponse = response.data;
      setData(resData.data)
      return resData;
    } catch (err) {
      const errAxios = err as AxiosError<any>;
      const errData: ApiErrorResponseType = errAxios.response?.data.error;
      const errMes = errData.message;
      setError(errData);
      throw new Error(errMes);
    } finally {
      setLoading(false);
    }
  }

  return { loading, data, error, updateProduct };
}

export default useUpdateProduct;