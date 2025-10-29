"use client";

import SelectorComponent from "@/components/SelectorComponent";
import { useState } from "react";
const categoryOptions = ["All","Jacket", "Paint", "Jeans"];
const statusOptions = ["All status", "Active", "Out of Stock"];
const priceOptions = ["All price", "$50 - $100", "$100 - $250", "$250 - $1000"];
const storeOptions = ["All stores", "CRM - 165 Tran Hung Dao"];

const CategoryOptions = () => {
  const [categoryOption, setCategoryOption] = useState(categoryOptions[0]);
  const [statusOption, setStatusOption] = useState(statusOptions[0]);
  const [priceOption, setPriceOption] = useState(priceOptions[0]);
  const [storeOption, setStoreOption] = useState(storeOptions[0]);

  return (
    <div className='w-full h-fit flex gap-5 py-4 px-4 bg-white'>
      {/* CATEGORY SELECTOR  */}
      <div className="flex flex-col gap-2 w-1/4">
        <span className="text-xs text-gray-600 font-semibold">Category</span>
        <SelectorComponent width="w-full" rounded="rounded-md" options={categoryOptions} optionSelector={categoryOption} setOptionSelector={setCategoryOption} fontSize={"text-xs"}/>
      </div>
      {/* STATUS SELECTOR  */}
      <div className="flex flex-col gap-2 w-1/4">
        <span className="text-xs text-gray-600 font-semibold">Status</span>
        <SelectorComponent width="w-full" rounded="rounded-md" options={statusOptions} optionSelector={statusOption} setOptionSelector={setStatusOption} fontSize={"text-xs"}/>
      </div>
      {/* PRICE SELECTOR  */}
      <div className="flex flex-col gap-2 w-1/4">
        <span className="text-xs text-gray-600 font-semibold">Price</span>
        <SelectorComponent width="w-full" rounded="rounded-md" options={priceOptions} optionSelector={priceOption} setOptionSelector={setPriceOption} fontSize={"text-xs"}/>
      </div>
      {/* STORE SELECTOR  */}
      <div className="flex flex-col gap-2 w-1/4">
        <span className="text-xs text-gray-600 font-semibold">Stores</span>
        <SelectorComponent width="w-full" rounded="rounded-md" options={storeOptions} optionSelector={storeOption} setOptionSelector={setStoreOption} fontSize={"text-xs"}/>
      </div>
    </div>
  )
}

export default CategoryOptions