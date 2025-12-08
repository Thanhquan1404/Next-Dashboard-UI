"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import { QuotationRow, QuotationStatisticType, QuotationType } from "@/lib/data.quotation";
import { useNotification } from "./NotificationProvider";
import useGetListQuotation from "@/fetching/quotation/getAllQuotation";
import useSaveQuotation from "@/fetching/quotation/saveQuotation";

interface QuotationTableProviderContextType {
  getAllQuotationLoading: boolean,
  saveQuotationLoading: boolean,
  saveAQuotation: (newQuotation: QuotationType, leadID: string) => void,
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

  // STATE
  const [quotationRows, setQuotationRows] = useState<QuotationRow[]>([]);
  const [quotationStatistic, setQuotationStatistic] =
    useState<QuotationStatisticType>({});

  // GET ALL QUOTATIONS
  const didFetch = useRef(false);

  const getQuotation = useCallback(async () => {
    try {
      const { quotationRows, quotationStatistic } = await getAllQuotation();

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

  // SAVE QUOTATION 
  const saveAQuotation = async (newQuotation: QuotationType, leadID: string) => {
    try {
      const resData = await saveQuotation(newQuotation, leadID);
      const responseQuotation: QuotationRow = {
        QuotationID: resData.id,
        QuotationContent: resData.content,
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
        quotationRows,
        quotationStatistic,
        saveAQuotation,
      }}
    >
      {children}
    </QuotationTableContext.Provider>
  );
};
