"use client";
import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const options = [
  {
    icon: "",
    title: "Selector product property",
  },
  { 
    icon: "/product_property_productID.png",
    title: "Product ID" 
  },
  { 
    icon: "/product_property_name.png",
    title: "Product Name" 
  },
  { 
    icon: "/product_property_quantity.png",
    title: "Quantity" 
  },
  { 
    icon: "/product_property_description.png",
    title: "Description" 
  },
];

interface PropertySelectorProps {
  label?: string;
  width?: string;
  height?: string;
  showIcon?: boolean;
  customIcon?: React.ReactNode;
}

const PropertySelectorComponent: React.FC<PropertySelectorProps> = ({
  label,
  width = "w-full",
  height = "h-10",
  showIcon = true,
  customIcon,
}) => {
  const [optionSelector, setOptionSelector] = useState(options[0].title);

  return (
    <div className={`relative ${width}`}>
      <Listbox value={optionSelector} onChange={setOptionSelector}>
        <div className="relative">
          {/* --- Dropdown Button --- */}
          <Listbox.Button
            className={`
              flex justify-between items-center w-full ${height} px-4
              bg-white border border-gray-300 rounded-lg shadow-sm
              hover:border-blue-400 hover:bg-blue-50
              transition-all duration-300
            `}
          >
            <div className="flex flex-col text-left truncate">
              {label && (
                <span className="text-xs text-gray-500">{label}</span>
              )}
              <span className="text-sm font-medium truncate">{optionSelector}</span>
            </div>

            {/* Icon */}
            {showIcon &&
              (customIcon ? (
                customIcon
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ))}
          </Listbox.Button>

          {/* --- Dropdown Options --- */}
          <Listbox.Options className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg ring-1 ring-gray-200 max-h-60 overflow-auto">
            {options.map((option) => (
              <Listbox.Option
                key={option.title}
                value={option.title}
                className={({ active, selected }) =>
                  `cursor-pointer px-4 py-2 text-sm truncate transition-all duration-200 flex items-center gap-5
                  ${active ? "bg-blue-100 text-blue-700" : "text-gray-700"}
                  ${selected ? "font-semibold" : "font-normal"}`
                }
              >
                {option.icon && <Image src={option.icon} alt="product property icon" width={18} height={18}/>}
                <div>{option.title}</div>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default PropertySelectorComponent;
