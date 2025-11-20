import LastWeekFinancialComparation from "./LastWeekFinancialComparation"
import LastWeekFinancialReport from "./LastWeekFinancialReport"
import SalesTable from "./SalesTable"
// step 1: Set up layout 
const Page = () => {
  return (
    <div className='flex flex-col gap-4 px-[10px] py-[10px] '>
      {/* FIRST LINE  */}
      {/* Last week financial report  */}
      <LastWeekFinancialReport />
      {/* Last week financial comparation  */}
      <LastWeekFinancialComparation />
      {/* SALES TABLE  */}
      <SalesTable />
    </div>
  )
}

export default Page