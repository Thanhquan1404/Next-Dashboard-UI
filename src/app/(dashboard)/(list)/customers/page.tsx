"use client"
import AddingNewCustomerWindow from "./AddingNewCustomerWindow"
import CustomerTable from "./CustomerTable"
import CustomerTableHeader from "./CustomerTableHeader"
import { tableRows, tableRowDataType } from '@/lib/data'
import { useCallback, useState, useEffect } from "react"
import useGetAllCustomer from "@/fetching/customer/getAllCustomer";
import { useNotification } from "@/providers/NotificationProvider";

const Page = () => {
  // DROPBACK WINDOW TOGGLE
  const [dropbackToggle, setDropbackToggle] = useState<boolean>(false);

  //STATE - initialize with local sample rows until real data loads
  const [tableData, setTableData] = useState<tableRowDataType[]>([]);

  const { getAllCustomer } = useGetAllCustomer();
  const { showNotification } = useNotification();

  const generateCustomerID = useCallback((currentLength: number) => {
    return `CUST${String(currentLength + 1).padStart(3, "0")}`;
  }, []);

  const handleAddCustomer = useCallback((newRow: Omit<tableRowDataType, "customerID">) => {
    setTableData(prev => {
      const newID = generateCustomerID(prev.length);
      return [...prev, { ...newRow, customerID: newID } as tableRowDataType];
    });
  }, []);

  // Fetch customers on mount and set the table data
  useEffect(() => {
    (async () => {
      try {
        const res = await getAllCustomer(); // optional pageNo can be passed
        const payload = res?.data || res; // support both shapes
        if (Array.isArray(payload)) {
          const mapped: tableRowDataType[] = payload.map((c: any) => ({
            info: c.fullName || "",
            gmail: c.email || "",
            customerID: c.id || "",
            majority: c.rating != null ? String(c.rating) : "",
            company: c.company || "",
            phone: c.phoneNumber || "",
            address: c.address || "",
            actions: "View",
          }));
          setTableData(mapped);
        } else if (payload?.data && Array.isArray(payload.data)) {
          const mapped: tableRowDataType[] = payload.data.map((c: any) => ({
            info: c.fullName || "",
            gmail: c.email || "",
            customerID: c.id || "",
            majority: c.rating != null ? String(c.rating) : "",
            company: c.company || "",
            phone: c.phoneNumber || "",
            address: c.address || "",
            actions: "View",
          }));
          setTableData(mapped);
        } else {
          // fallback: keep sample
        }
      } catch (err: any) {
        showNotification(err?.message || "Failed to fetch customers", true);
      }
    })();
  }, []);

  return (
    <div className='bg-white w-full h-full px-4 py-1 box-border flex flex-col'>
      <div>
        {/* HEADER  */}
        <CustomerTableHeader setDropbackToggle={setDropbackToggle} />
        {/* CUSTOMER TABLE  */}
        <CustomerTable data={tableData} />
      </div>
      {/* TOGGLE ADDING CUSTOMER WINDOW  */}
      <div
        className={`fixed inset-0 z-[90] transition-all duration-500 ${dropbackToggle
          ? "bg-black/40 backdrop-blur-sm visible opacity-100"
          : "invisible opacity-0"
          }`}
        onClick={() => {
          setDropbackToggle(prev => !prev);
        }}
      ></div>
      <div
        className={`fixed inset-y-0 right-0 z-[100] w-[600px] bg-blue-500/30 shadow-2xl 
          transition-transform duration-500 ease-in-out p-4
          ${dropbackToggle ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <AddingNewCustomerWindow />
      </div>
    </div >
  )
}

export default Page