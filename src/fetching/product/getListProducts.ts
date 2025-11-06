import { URL, accessToken } from '@/lib/data';
import { useState } from 'react';
import axios from 'axios';
// import { getToken } from '@/service/localStorageService';

// INITIALIZE THE URL PATH 
const path = `${URL}/crm/products`;

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
      const response = await axios.get(path, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
      });

      const resData = response.data;
      const resContent = resData.data.content; 

      setData(resData);
      return resContent;
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }

  }

  return { loading, data, error, getListProducts };
}

export default useGetListProducts;