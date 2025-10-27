"use client";
import React from "react";
import SearchBar from "@/components/SearchBar"
import AddNewCustomerButton from "./AddNewCustomerButton";
import { tableRowDataType } from "@/lib/data";

interface Props {
  setTableData: React.Dispatch<React.SetStateAction<tableRowDataType[]>>;
  handleAddCustomer: (data: tableRowDataType) =>  void;
}
const CustomerTableHeader = ({setTableData, handleAddCustomer}: Props) => {

  return (
    <div className="w-full h-[50px] items-center flex justify-between">
      {/* HEADER TITLE  */}
      <h1 className="text-md font-semibold">All customers</h1>
      {/* SEARCH BAR AND BUTTONS  */}
      <div className="w-fit gap-4 flex items-center justify-between">
        <SearchBar />
        <button className="bg-transparent p-1 rounded-xl hover:text-white hover:bg-blue-300 transition-all duration-450">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
        </button>
        <button className="bg-transparent p-1 rounded-xl hover:text-white hover:bg-blue-300 transition-all duration-450">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
          </svg>
        </button>
        <AddNewCustomerButton setTableData={setTableData} handleAddCustomer={handleAddCustomer}/>
      </div>
    </div>
  )
}

export default CustomerTableHeader