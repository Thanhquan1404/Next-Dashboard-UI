"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import { QuotationRow, QuotationStatisticType, QuotationType } from "@/lib/data.quotation";
import { useNotification } from "./NotificationProvider";
import useGetListQuotation from "@/fetching/quotation/getAllQuotation";
import useSaveQuotation from "@/fetching/quotation/saveQuotation";
import useGetListQuotationWithPageNo from "@/fetching/quotation/getAllQuotationWithPageNo";

interface QuotationTableProviderContextType {
  getAllQuotationLoading: boolean;
  getAllQuotationWithPageNoLoading: boolean;
  saveQuotationLoading: boolean;
  saveAQuotation: (newQuotation: QuotationType, leadID: string) => void;
  getQuotationWithPageNo: (pageNo: number) => void;
  quotationRows: QuotationRow[];
  quotationStatistic: QuotationStatisticType;
  totalPages?: number;
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

  // API HOOKS
  const { loading: getAllQuotationLoading, getAllQuotation } = useGetListQuotation();
  const { loading: saveQuotationLoading, saveQuotation } = useSaveQuotation();
  const { loading: getAllQuotationWithPageNoLoading, getAllQuotationWithPageNo } = useGetListQuotationWithPageNo();

  // STATE
  const [quotationRows, setQuotationRows] = useState<QuotationRow[]>([]);
  const [quotationStatistic, setQuotationStatistic] = useState<QuotationStatisticType>({});
  const [totalPages, setTotalPage] = useState<number | undefined>(undefined);

  // GET ALL QUOTATIONS - initial load uses page 1 pagination-aware endpoint
  const didFetch = useRef(false);

  const getQuotation = useCallback(async () => {
    try {
      const { quotationRows, quotationStatistic, dataPaganavigate } = await getAllQuotationWithPageNo(1);

      if (quotationRows && quotationStatistic) {
        setQuotationRows(quotationRows);
        setQuotationStatistic(quotationStatistic);
        if (dataPaganavigate?.totalPages != null) {
          setTotalPage(dataPaganavigate.totalPages);
        }
      } else {
        showNotification("Error loading quotations", true);
      }
    } catch (error) {
      showNotification(String(error), true);
    }
  }, [getAllQuotationWithPageNo, showNotification]);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    getQuotation();
  }, []);

  // GET QUOTATIONS WITH PAGE NO (called by UI when page changes)
  const getQuotationWithPageNo = async (pageNo: number) => {
    try {
      const { quotationRows, quotationStatistic, dataPaganavigate } = await getAllQuotationWithPageNo(pageNo);

      if (quotationRows && quotationStatistic) {
        setQuotationRows(quotationRows);
        setQuotationStatistic(quotationStatistic);
        if (dataPaganavigate?.totalPages != null) {
          setTotalPage(dataPaganavigate.totalPages);
        }
      } else {
        showNotification("Error loading quotations", true);
      }
    } catch (error) {
      showNotification(String(error), true);
    }
  }

  // Aggregate quotationStatistic across all pages
  const aggregateQuotationStatistics = useCallback(async (pages?: number) => {
    if (!pages || pages <= 1) return;
    try {
      const aggregated: QuotationStatisticType = {};
      for (let p = 1; p <= pages; p++) {
        try {
          const res = await getAllQuotationWithPageNo(p);
          const pageStat = res.quotationStatistic || {};
          Object.keys(pageStat).forEach((k) => {
            aggregated[k] = (aggregated[k] || 0) + (pageStat[k] || 0);
          });
        } catch (err) {
          // continue to next page but notify
          showNotification(`Failed to fetch page ${p} for aggregation`, true);
        }
      }
      // update the statistic state with aggregated values
      setQuotationStatistic(aggregated);
    } catch (err) {
      showNotification(String(err), true);
    }
  }, []);

  // whenever totalPages becomes available, run aggregation in background
  useEffect(() => {
    if (totalPages && totalPages > 1) {
      // run async aggregator (no need to await)
      aggregateQuotationStatistics(totalPages);
    }
  }, [totalPages, aggregateQuotationStatistics]);

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
        totalPages,
      }}
    >
      {children}
    </QuotationTableContext.Provider>
  );
};