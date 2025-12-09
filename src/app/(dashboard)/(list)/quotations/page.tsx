"use client";

import { useState, useEffect } from "react"
import QuotationPageHeader from "./QuotationPageHeader"
import QuotationStatistic from "./QuotationStatistic"
import QuotationTable from "./QuotationTable"
import { useQuotationTable } from "@/providers/QuotationTableProvider"

const Page = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { totalPages, getQuotationWithPageNo } = useQuotationTable();

  // when page changes, call provider to fetch that page
  useEffect(() => {
    getQuotationWithPageNo(currentPage);
  }, [currentPage]);

  return (
    <div className='w-full h-full flex flex-col gap-5 px-3'>
      {/* PAGE HEADER  */}
      <QuotationPageHeader />
      <QuotationStatistic />
      <QuotationTable totalPages={totalPages ?? 1} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Page
