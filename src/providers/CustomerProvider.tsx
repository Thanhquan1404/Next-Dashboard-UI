"use client"

import useGetAllCustomer from "@/fetching/customer/getAllCustomer";
import { getAllCustomersResponse } from "@/lib/data.customers";
import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react"

interface CustomerProviderContextType {
  // LOADING 
  getAllCustomerLoading: boolean,

  // STATE
  customers: getAllCustomersResponse[] | null,
  totalPages: number,

  // FUNCTION 
  getCustomersWithPageNo: (pageNo: number) => void,
};

const CustomerContext = createContext<CustomerProviderContextType | null>(null);


export const useCustomer = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("useCustomer must be used within CustomerProvider");
  }

  return context;
}

interface CustomerProviderProps {
  children: ReactNode,
}

export const CustomerProvider: React.FC<CustomerProviderProps> = ({children}) => {
  // STATE 
  const [customers, setCustomers] = useState<getAllCustomersResponse[] | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  // API HOOK
  const {loading: getAllCustomerLoading, getAllCustomer} = useGetAllCustomer();


  /**
   * get customer with page no - handle the action when user change page or pagination action
   * @param pageNo current page
   */
  const getCustomersWithPageNo = async (pageNo: number) => {
    try {
      const result = await getAllCustomer(pageNo);
      setCustomers(result.data);
    } catch (error) {
      console.error("Failed to fetch customers:", error);
      setCustomers([]); 
    }
  }

  /**
   * get customers - initialize to take all customer from backend, and then set to 'customers' state
   */
  const getCustomers = useCallback( async() => {
    try {
      const result = await getAllCustomer();
      setCustomers(result.data);
      setTotalPages(result.pagination.totalPages);
    } catch (error) {
      console.error("Failed to fetch customers:", error);
      setCustomers([]); 
    }
  }, [getAllCustomer]);

  const didFetch = useRef<boolean>(false);
  useEffect( () => {
    if (didFetch.current){ return; }
    didFetch.current = true;
    getCustomers();
  }, [getCustomers]);

  const value: CustomerProviderContextType = {
    getAllCustomerLoading,

    customers,
    totalPages,

    getCustomersWithPageNo,
  }
  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  )
}