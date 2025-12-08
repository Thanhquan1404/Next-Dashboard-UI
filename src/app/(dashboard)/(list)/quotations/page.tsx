"use client";

import { useState } from "react"
import QuotationPageHeader from "./QuotationPageHeader"
import QuotationStatistic from "./QuotationStatistic"
import QuotationTable from "./QuotationTable"
import { quotationSamples } from "@/lib/data.quotation"
const Page = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <div className='w-full h-full flex flex-col gap-5 px-3'>
      {/* PAGE HEADER  */}
      <QuotationPageHeader />
      <QuotationStatistic />
      <QuotationTable sampleData={quotationSamples} totalPages={5} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Page