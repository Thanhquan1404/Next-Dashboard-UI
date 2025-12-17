import { GetListUserResponseType } from "@/lib/data.user";
import { useState } from "react";

const useGetListUser = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getListUser = async (): Promise<GetListUserResponseType[]> =>{
    setLoading(true);

    try {
      const resBackend = await fetch('/api/user/getListUser', {
        method: "GET",
      })

      const result = await resBackend.json()

      if (!resBackend.ok){
        throw new Error(String(result.error?.[0].message || result.error.message || "Unidentified error"))
      }

      return result.data;
    } catch (error) {
      throw new Error(String(error) || "Failed to get users")
    } finally {
      setLoading(false);
    }
  }

  return {loading, getListUser};
}

export default useGetListUser;