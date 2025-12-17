"use client"
import { OrderDataType, sampleOrders } from "@/lib/data.orders";
import OrderHeader from "./OrderHeader";
import OrderTable from "./OrderTable";
import FetchingLoadingStatus from "@/components/FetchingLoadingStatus";
import { useRef, useCallback, useEffect, useState } from "react";
import useGetListOrder from "@/fetching/order/getAllOrder";
import PageLoader from "@/components/PageLoader";
import useOrderSummary from "@/fetching/order/orderSummary";

const Page = () => {
  // STATE
  const [allOrder, setAllOrder] = useState<OrderDataType[]>([]);

  // API HOOK
  const { loading: getListOrderLoading, getListOrder } = useGetListOrder();
  const { loading: orderSummaryLoading, orderSummary} = useOrderSummary();
  const didFetch = useRef(false);

  const fetchAllOrders = useCallback(async () => {
    const { orderRows } = await getListOrder();
    setAllOrder(orderRows);
  }, [getListOrder]);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    fetchAllOrders();
  }, []);

  if (getListOrderLoading || orderSummaryLoading){
    return (
      <PageLoader />
    )
  }
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      <OrderHeader orders={allOrder} />

      <div className="h-[5%] w-full border-b border-gray-200 px-4 flex items-end">
        <div className="px-4 py-2 text-blue-600 font-semibold border-b-2 border-blue-600">
          Order table
        </div>
      </div>
        <OrderTable orders={allOrder} />
    </div>
  );
};

export default Page;
