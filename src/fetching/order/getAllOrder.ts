"use client";

import { useState } from "react";
import {
  ApiResponseListAllQuotation,
  QuotationRow,
  QuotationStatisticType,
} from "@/lib/data.quotation";
import { OrderDataType, OrderItemType } from "@/lib/data.orders";


const useGetListOrder = () => {
  const [loading, setLoading] = useState<boolean>(false);


  const getListOrder = async (): Promise<{orderRows: OrderDataType[]}> => {
    setLoading(true);

    try {
      const response = await fetch("/api/order/getAllOrder", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const resData = await response.json();

      const rawData: OrderDataType[] = resData.data; 

      return {orderRows: rawData};
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getListOrder,
  };
};

export default useGetListOrder;