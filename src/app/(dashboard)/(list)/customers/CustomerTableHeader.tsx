"use client";
import React from "react";
import { tableRowDataType } from "@/lib/data";

interface Props {
  setDropbackToggle: React.Dispatch<React.SetStateAction<boolean>>
}
const CustomerTableHeader = ({ setDropbackToggle }: Props) => {

  return (
    <div className="w-full h-[50px] items-center flex justify-between">
      {/* HEADER TITLE  */}
      <h1 className="text-md font-semibold">All customers</h1>
      {/* SEARCH BAR AND BUTTONS  */}
      <div className="w-fit gap-4 flex items-center justify-between">
        {/* SEARCH BAR */}
        <div className="w-[180px] h-full flex items-center gap-2 px-1 rounded-full border border-gray-300 bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            className="flex-1 bg-transparent text-sm focus:outline-none"
            placeholder="Search..."
          />
        </div>
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
        {/* NEW CUSTOMER */}
        <button 
          className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          onClick={() => setDropbackToggle(prev => !prev)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New
        </button>
      </div>
    </div>
  )
}

export default CustomerTableHeader