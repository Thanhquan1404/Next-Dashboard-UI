"use client";
import AddingProductWindow from "./AddingProductWindow";
import CategoryOptions from "./CategoryOptions";
import ProductsPageHeader from "./ProductsPageHeader";
import ProductsTable from "./ProductsTable";
import { useState } from "react";

const Page = () => {
  // STATE HOOK TO MAKE ADDING WINDOW APPEAR
  const [windowVisible, setWindowVisible] = useState<boolean>(true);

  // FUNCTION TO HANDLE 'ADDING' WINDOW TOGGLE
  const handleWindowToggle = (): void => {
    setWindowVisible((prev) => !prev);
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="bg-transparent w-full h-full flex flex-col gap-1">
        {/* PAGE HEADER */}
        <ProductsPageHeader handleWindowToggle={handleWindowToggle} />
        {/* CATEGORY FILTER */}
        <CategoryOptions />
        {/* PRODUCT TABLE */}
        <ProductsTable />
      </div>

      {/* --- BACKDROP OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[90] transition-all duration-500 ${
          windowVisible
            ? "bg-black/40 backdrop-blur-sm visible opacity-100"
             : "" //"invisible opacity-0"
        }`}
        onClick={handleWindowToggle} // click outside to close
      ></div>

      {/* --- ADDING WINDOW --- */}
      <div
        className={`fixed left-0 w-full h-full rounded-t-2xl absolute shadow-lg z-[100] transition-transform duration-500 ${
          windowVisible ? "bottom-0" : "translate-y-full"
        }`}
      >
        <AddingProductWindow handleWindowToggle={handleWindowToggle}/>
      </div>
    </div>
  );
};

export default Page;
