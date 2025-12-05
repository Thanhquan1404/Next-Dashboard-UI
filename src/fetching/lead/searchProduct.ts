"use client";
import { useState } from "react";

function useSearchProduct(){
  const [loading, setLoading] = useState<boolean>(false);
  
  const searchProduct = async (query: string) => {
    setLoading(true);

    try{
      const response = await fetch(`api/product/searchProduct?query=${query}`, {
        method: "GET",
        credentials: "include",
      })

      const resData = await response.json();

      return resData;
    }catch( err ){
      const errAny = err as Error;
      const errMessage = errAny.message || "Unknown error";
      throw new Error(errMessage);
    }finally {
      setLoading(false);
    }
  }

  return {loading, searchProduct}
}

export default useSearchProduct;