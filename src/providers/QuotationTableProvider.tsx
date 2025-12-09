"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import { QuotationRow, QuotationStatisticType, QuotationType } from "@/lib/data.quotation";
import { useNotification } from "./NotificationProvider";
import useGetListQuotation from "@/fetching/quotation/getAllQuotation";
import useSaveQuotation from "@/fetching/quotation/saveQuotation";
import useGetListQuotationWithPageNo from "@/fetching/quotation/getAllQuotationWithPageNo";

interface QuotationTableProviderContextType {
  getAllQuotationLoading: boolean,
  getAllQuotationWithPageNoLoading: boolean,
  saveQuotationLoading: boolean,
  saveAQuotation: (newQuotation: QuotationType, leadID: string) => void,
  getQuotationWithPageNo: (pageNo: number) => void,
  quotationRows: QuotationRow[],
  quotationStatistic: QuotationStatisticType,
}

const QuotationTableContext = createContext<QuotationTableProviderContextType | null>(null);

export const useQuotationTable = () => {
  const context = useContext(QuotationTableContext);
  if (!context) {
    throw new Error("useQuotationTable must be used within QuotationTableProvider");
  }

  return context;
}

interface QuotationTableProviderProps {
  children: ReactNode,
}

export const QuotationTableProvider: React.FC<QuotationTableProviderProps> = ({ children }) => {
  const { showNotification } = useNotification();

  // API HOOK
  const { loading: getAllQuotationLoading, getAllQuotation } = useGetListQuotation();
  const { loading: saveQuotationLoading, saveQuotation } = useSaveQuotation();
  const { loading: getAllQuotationWithPageNoLoading, getAllQuotationWithPageNo} = useGetListQuotationWithPageNo();

  // STATE
  const [quotationRows, setQuotationRows] = useState<QuotationRow[]>([]);
  const [quotationStatistic, setQuotationStatistic] = useState<QuotationStatisticType>({});
  const [totalPages, setTotalPage] = useState<number>();

  // GET ALL QUOTATIONS
  const didFetch = useRef(false);

  const getQuotation = useCallback(async () => {
    try {
      const { quotationRows, quotationStatistic, dataPaganavigate } = await getAllQuotation();

      if (quotationRows && quotationStatistic) {
        setQuotationRows(quotationRows);
        setQuotationStatistic(quotationStatistic);
      } else {
        showNotification("Error loading quotations", true);
      }
    } catch (error) {
      showNotification(String(error), true);
    }
  }, [getAllQuotation, showNotification]);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    getQuotation();
  }, [getQuotation]);

  // GET ALL QUOTATIONS WITH PAGE NO
  const getQuotationWithPageNo = async (pageNo: number) => {
    try {
      const { quotationRows, quotationStatistic } = await getAllQuotationWithPageNo(pageNo);

      if (quotationRows && quotationStatistic) {
        setQuotationRows(quotationRows);
        setQuotationStatistic(quotationStatistic);
      } else {
        showNotification("Error loading quotations", true);
      }
    } catch (error) {
      showNotification(String(error), true);
    }
  }

  // SAVE QUOTATION 
  const saveAQuotation = async (newQuotation: QuotationType, leadID: string) => {
    try {
      const resData = await saveQuotation(newQuotation, leadID);
      const responseQuotation: QuotationRow = {
        QuotationID: resData.id,
        QuotationContent: resData.content,
        QuotationTitle: resData.title,
        CreatedAt: resData.createdAt,
        CustomerName: resData.lead.fullName,
        FinalAmount: resData.finalAmount,
        Status: resData.status,
        Items: resData.items.length,
        ValidUntil: resData.validUntil,
      }

      setQuotationRows( prev => [...prev, responseQuotation]);
      showNotification("Quotation saved successfully");
    } catch (error) {
      showNotification(String(error), true);
    }
  };



  return (
    <QuotationTableContext.Provider
      value={{
        getAllQuotationLoading,
        saveQuotationLoading,
        getAllQuotationWithPageNoLoading,
        quotationRows,
        quotationStatistic,
        getQuotationWithPageNo,
        saveAQuotation,
      }}
    >
      {children}
    </QuotationTableContext.Provider>
  );
};
