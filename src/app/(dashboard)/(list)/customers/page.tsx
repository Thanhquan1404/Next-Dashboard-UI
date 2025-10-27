"use client"
import CustomerTable from "./CustomerTable"
import CustomerTableHeader from "./CustomerTableHeader"
import {tableRows, tableRowDataType} from '@/lib/data'
import { useCallback, useState } from "react"

const Page = () => {
  const [tableData, setTableData] = useState<tableRowDataType[]>(tableRows);
  
  const generateCustomerID = useCallback((currentLength: number) => {
    return `CUST${String(currentLength + 1).padStart(3, "0")}`;
  }, []);

  const handleAddCustomer = useCallback((newRow: Omit<tableRowDataType, "customerID">) => {
    setTableData(prev => {
      const newID = generateCustomerID(prev.length);
      return [...prev, { ...newRow, customerID: newID } as tableRowDataType];
    });
  }, [generateCustomerID]);

  return (
    <div className='bg-white w-full h-full px-4 py-1 box-border flex flex-col'>
      {/* HEADER  */}
      <CustomerTableHeader setTableData={setTableData} handleAddCustomer={handleAddCustomer}/>
      {/* CUSTOMER TABLE  */}
      <CustomerTable data={tableData} />
    </div>
  )
}

export default Page