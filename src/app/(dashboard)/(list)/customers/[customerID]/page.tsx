"use client";

import { useParams } from "next/navigation";
import useGetCustomerDetail from "@/fetching/customer/getCustomerDetail";
import { useEffect, useRef, useState } from "react";
import { useNotification } from "@/providers/NotificationProvider";

const Page = () => {
  const params = useParams();
  const customerID = params?.customerID as string;
  const { loading, getCustomerDetail } = useGetCustomerDetail();
  const didFetch = useRef(false);
  const [customer, setCustomer] = useState<any>(null);
  const { showNotification } = useNotification();

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    (async () => {
      try {
        const res = await getCustomerDetail(customerID);
        // backend responses may wrap in { data: {...} }
        const data = res?.data || res;
        setCustomer(data);
      } catch (err: any) {
        showNotification(err?.message || "Failed to load customer", true);
      }
    })();
  }, [customerID, getCustomerDetail, showNotification]);

  if (loading || !customer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading customer...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">{customer.fullName}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase">Email</p>
            <p className="font-medium">{customer.email}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase">Phone</p>
            <p className="font-medium">{customer.phoneNumber}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase">Company</p>
            <p className="font-medium">{customer.company}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase">Rating</p>
            <p className="font-medium">{customer.rating}</p>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs text-gray-500 uppercase">Assigned To</p>
            {customer.assignTo ? (
              <p className="font-medium">
                {customer.assignTo.firstName} {customer.assignTo.lastName} — {customer.assignTo.email}
              </p>
            ) : (
              <p className="font-medium">—</p>
            )}
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase">Created At</p>
            <p className="font-medium">{new Date(customer.createdAt).toLocaleString("vi-VN")}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase">Updated At</p>
            <p className="font-medium">{new Date(customer.updatedAt).toLocaleString("vi-VN")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
