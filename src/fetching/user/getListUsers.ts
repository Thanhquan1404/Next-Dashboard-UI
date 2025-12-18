import { ApiResponsePagination } from "@/lib/data";
import { GetListUserResponseType } from "@/lib/data.user";
import { useState } from "react";

const useGetListUser = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getListUser = async (): Promise<{users: GetListUserResponseType[], pagination: ApiResponsePagination}> =>{
    setLoading(true);

    try {
      const resBackend = await fetch('/api/admin/user/getListUser', {
        method: "GET",
      })

      const result = await resBackend.json()

      if (!resBackend.ok){
        throw new Error(String(result.error?.[0].message || result.error.message || "Unidentified error"))
      }

      return {
        users: result.data,
        pagination: result.pagination,
      };
    } catch (error) {
      throw new Error(String(error) || "Failed to get users")
    } finally {
      setLoading(false);
    }
  }

  return {loading, getListUser};
}

export default useGetListUser;