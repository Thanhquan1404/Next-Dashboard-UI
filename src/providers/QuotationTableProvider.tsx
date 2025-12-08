"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import { QuotationRow, QuotationStatisticType } from "@/lib/data.quotation";
import { useNotification } from "./NotificationProvider";
import useGetListQuotation from "@/fetching/quotation/getAllQuotation";

interface QuotationTableProviderContextType{
  getAllQuotationLoading: boolean,
  quotationRows: QuotationRow[],
  quotationStatistic: QuotationStatisticType,
}

const QuotationTableContext = createContext<QuotationTableProviderContextType | null>(null);

export const useQuotationTable = () => {
  const context = useContext(QuotationTableContext);
  if (!context){
      throw new Error("useQuotationTable must be used within QuotationTableProvider");
  }

  return context;
}

interface QuotationTableProviderProps {
  children: ReactNode,
}

export const QuotationTableProvider: React.FC<QuotationTableProviderProps> = ({children}) => {
  const { showNotification } = useNotification();

  // API REQUEST 
  const {loading: getAllQuotationLoading, getAllQuotation} = useGetListQuotation();

  // STATE
  const [quotationRows, setQuotationRows] = useState<QuotationRow[]>([]);
  const [quotationStatistic, setQuotationStatistic] = useState<QuotationStatisticType>({});


  // GET QUOTATIONS
  const didFetch = useRef<boolean>(false);
  const getQuotation = useCallback(async() => {
    try{
      const {quotationRows, quotationStatistic} = await getAllQuotation();

      if (quotationRows && quotationStatistic){
        setQuotationRows(quotationRows);
        setQuotationStatistic(quotationStatistic);
        console.log(quotationRows);
        console.log(quotationStatistic);
      }else{
        showNotification("There is error when get all quotation", true);
      }
    }catch(error){
      showNotification(String(error), true);
    }
  }, []);
  useEffect(() => {
    if (didFetch.current){return;}
    getQuotation();
    didFetch.current = true;
  }, [])

  return (
    <QuotationTableContext.Provider value={{
      getAllQuotationLoading,
      quotationRows,
      quotationStatistic,
    }}>
      {children}
    </QuotationTableContext.Provider>
  )
}