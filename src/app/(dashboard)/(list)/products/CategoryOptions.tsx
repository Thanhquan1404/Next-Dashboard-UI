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
    <div className='w-full h-fit flex border-y border-gray-200 gap-5 py-4 px-4'>
      {/* CATEGORY SELECTOR  */}
      <div className="flex flex-col gap-2 w-1/4">
        <span className="text-sm text-gray-700 font-semibold">Category</span>
        <SelectorComponent width="w-full" rounded="rounded-md" options={categoryOptions} optionSelector={categoryOption} setOptionSelector={setCategoryOption}/>
      </div>
      {/* STATUS SELECTOR  */}
      <div className="flex flex-col gap-2 w-1/4">
        <span className="text-sm text-gray-700 font-semibold">Status</span>
        <SelectorComponent width="w-full" rounded="rounded-md" options={statusOptions} optionSelector={statusOption} setOptionSelector={setStatusOption}/>
      </div>
      {/* PRICE SELECTOR  */}
      <div className="flex flex-col gap-2 w-1/4">
        <span className="text-sm text-gray-700 font-semibold">Price</span>
        <SelectorComponent width="w-full" rounded="rounded-md" options={priceOptions} optionSelector={priceOption} setOptionSelector={setPriceOption}/>
      </div>
      {/* STORE SELECTOR  */}
      <div className="flex flex-col gap-2 w-1/4">
        <span className="text-sm text-gray-700 font-semibold">Stores</span>
        <SelectorComponent width="w-full" rounded="rounded-md" options={storeOptions} optionSelector={storeOption} setOptionSelector={setStoreOption}/>
      </div>
    </div>
  )
}

export default CategoryOptions