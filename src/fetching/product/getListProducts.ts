import { URL, accessToken } from '@/lib/data';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
// import { getToken } from '@/service/localStorageService';

// INITIALIZE THE URL PATH 
const path = `${URL}/crm/products`;

// API CONTENT TYPE
interface ApiContentResponseType {
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
// API PAGINATION TYPE
interface pagination{
  hasPre: boolean,
  hasNext: boolean,
  pageNumber: number,
  totalPages: number,
}
// API RESPONSE TYPE 
interface ApiResponse {
  code: string;
  message: string;
  data?: ApiContentResponseType[];
  error?: ApiErrorResponseType;
  pagination?: pagination;
}

const useGetListProducts = () => {
  // STATE 
  const [data, setData] = useState<any | null>();
  const [error, setError] = useState<any | null>();
  const [loading, setLoading] = useState<boolean>(false);

  // FETCHING FUNCTION
  const getListProducts = async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await axios.get<ApiResponse>(path, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
      });

      const resData = response.data;
      const resContent:  ApiContentResponseType[] | undefined = resData.data; 

      setData(resData);
      return resContent;
    } catch (err) {
      const axiosErr = err as AxiosError<any>;
      const errData: ApiErrorResponseType = axiosErr.response?.data.error;
      const errMess: string = errData.message;

      throw new Error(errMess);
      console.log
    } finally {
      setLoading(false);
    }

  }

  return { loading, data, error, getListProducts };
}

export default useGetListProducts;