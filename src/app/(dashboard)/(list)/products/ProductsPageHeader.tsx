"use client";
import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
// import MUI icons
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import GridViewIcon from '@mui/icons-material/GridView';

const showOptions = ["All Products", "New Arrivals", "Top Rated"];
const sortByOptions: string[] = ["Default", "Product Name"];
interface Props {
  handleWindowToggle: () => void,
  handleSearchProductEvent: (query: string) => void,
}
const ProductsPageHeader = ({ handleWindowToggle, handleSearchProductEvent }: Props) => {
  const [showOptionSelect, setShowOptionSelect] = useState(showOptions[0]);
  const [sortByOptionSelect, setSortByOptionSelect] = useState(sortByOptions[0]);

  return (
    <div className='w-full flex justify-between items-center px-4 bg-white py-2'>
      {/* LEFTSIDE COMPONENT  */}
      <div className="w-4/5 flex gap-3">
        {/* ARANGE BUTTON  */}
        <div className='flex gap-1 items-center'>
          <div className='border-[1px] cursor-pointer opacity-[50%] hover:opacity-[100%] p-1 rounded-lg flex items-center justify-center hover:scale-105 hover:translate-y-[-1px] transition-all duration-500'>
            <ReorderOutlinedIcon sx={{ width: "20px", height: "20px" }} />
          </div>
          <div className='border-[1px] cursor-pointer opacity-[50%] hover:opacity-[100%] p-1 rounded-lg flex items-center justify-center hover:scale-105 hover:translate-y-[-1px] transition-all duration-500'>
            <GridViewIcon sx={{ width: "20px", height: "20px" }} />
          </div>
        </div>
        {/* SEARCH BAR  */}
        <div
          className="bg-gray-100  hidden md:flex items-center w-fit justify-center gap-2 ring-[1.0px] ring-gray-300 rounded-md px-2 text-xs transition-all duration-300 focus-within:ring-purple-400 hover:ring-purple-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 opacity-80">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchProductEvent(e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }}
            type="text"
            placeholder="Search products..."
            className="w-[220px] p-[4.5px] bg-transparent outline-none font-semibold"
          />
        </div>
        {/* 'SHOW' SELECTION ELEMENT  */}
        <div className="relative w-56">
          <Listbox value={showOptionSelect} onChange={setShowOptionSelect}>
            <div className="relative">
              {/* Dropdown Button */}
              <Listbox.Button className="bg-gray-100 hover:bg-white/70 transition-bg duration-200 w-full flex justify-between items-center backdrop-blur-md border border-gray-200 rounded-xl px-4 py-1 text-sm text-gray-700 shadow-sm">
                <div className="flex items-center gap-1">
                  <span className="block text-xs text-gray-500">Show:</span>
                  <span className="font-medium text-gray-700 text-sm font-semibold">{showOptionSelect}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </Listbox.Button>

              {/* Dropdown Options */}
              <Listbox.Options className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg ring-1 ring-gray-200">
                {showOptions.map((option) => (
                  <Listbox.Option
                    key={option}
                    value={option}
                    className="cursor-pointer px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                  >
                    {option}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
        {/* 'SORT' SELECTION ELEMENT  */}
        <div className="relative w-56">
          <Listbox value={sortByOptionSelect} onChange={setSortByOptionSelect}>
            <div className="relative">
              {/* Dropdown Button */}
              <Listbox.Button className="bg-gray-100 hover:bg-white/70 transition-bg duration-200 w-full flex justify-between items-center backdrop-blur-md border border-gray-200 rounded-xl px-4 py-1 text-sm text-gray-700 shadow-sm">
                <div className="flex items-center gap-1">
                  <span className="block text-xs text-gray-500">Sort by:</span>
                  <span className="font-medium text-gray-700 text-sm font-semibold">{sortByOptionSelect}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </Listbox.Button>

              {/* Dropdown Options */}
              <Listbox.Options className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg">
                {sortByOptions.map((option) => (
                  <Listbox.Option
                    key={option}
                    value={option}
                    className="cursor-pointer px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                  >
                    {option}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
      </div>
      {/* RIGHTSIDE COMPONENT  */}
      <div className="w-1/5 flex justify-end">
        <button
          className="
            relative
            border border-blue-500 
            w-[150px] py-2 
            rounded-md 
            flex items-center justify-center gap-2
            bg-blue-500 text-white
            font-semibold text-sm
            transition-all duration-300
            hover:bg-white hover:text-blue-500
            hover:shadow-lg hover:-translate-y-[2px]
            active:scale-95
          "
          onClick={() => handleWindowToggle()}
        >
          {/* Icon with motion on hover */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span>Add Product</span>
        </button>
      </div>
    </div>
  )
}

export default ProductsPageHeader