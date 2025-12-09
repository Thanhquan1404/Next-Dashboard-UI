"use client";

import { useState } from "react"
import QuotationPageHeader from "./QuotationPageHeader"
import QuotationStatistic from "./QuotationStatistic"
import QuotationTable from "./QuotationTable"
const Page = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  return (
    <div className='w-full h-full flex flex-col gap-5 px-3'>
      {/* PAGE HEADER  */}
      <QuotationPageHeader />
      <QuotationStatistic />
      <QuotationTable totalPages={1} currentPage={1} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Page