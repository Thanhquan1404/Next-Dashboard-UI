"use client";
import SelectorComponent from "@/components/SelectorComponent";
import Image from "next/image";
import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const discountOption = ["percentage", "currency"];
// DECLEAR PRODUCT CATEGORY 
type productCategoryType = {
  id: number,
  key: string,
  label: string,
};

const productCategory: productCategoryType[] = [
  {
    id: 1,
    key: "MACBOOK",
    label: "Macbook",
  },
  {
    id: 2,
    key: "IPAD",
    label: "Ipad",
  },
  {
    id: 3,
    key: "IPHONE",
    label: "Phone",
  },
  {
    id: 4,
    key: "AIRPOD",
    label: "Air pod",
  },
  {
    id: 5,
    key: "IMAC",
    label: "Imac",
  },
  {
    id: 6,
    key: "MACMINI",
    label: "Mac mini",
  },
  {
    id: 7,
    key: "APPLEDISPLAY",
    label: "Apple display",
  },
  {
    id: 8,
    key: "ACCESSORIES",
    label: "Apple accessories"
  }
];
// DECLEAR PRODUCT COLORS
type productColorType = {
  id: number,
  key: string,
  colors: string[],
}
const productColor: productColorType[] = [
  {
    id: 1,
    key: "MACBOOK",
    colors: ["#D4AF37", "#B8B0B0", "#A3AAAE", "#F5F5F7"], 
  },
  {
    id: 2,
    key: "IPAD",
    colors: ["#E8C5A3", "#B1B1B1", "#1C1C1E", "#F5F5F7", "#C5B9E3"], // Starlight, Silver, Space Gray, Blue, Purple
  },
  {
    id: 3,
    key: "IPHONE",
    // iPhone 15 style colors
    colors: ["#1C1C1E", "#D4AF37", "#F2F2F2", "#C5B9E3", "#E8C5A3", "#2B6CB0"], // Black, Gold, White, Purple, Starlight, Blue
  },
  {
    id: 4,
    key: "AIRPOD",
    colors: ["#F2F2F2"], // White
  },
  {
    id: 5,
    key: "IMAC",
    colors: ["#0A84FF", "#FF453A", "#30D158", "#FFD60A", "#BF5AF2", "#FF9F0A", "#F5F5F7"], // Blue, Red, Green, Yellow, Purple, Orange, Silver
  },
  {
    id: 6,
    key: "MACMINI",
    colors: ["#B1B1B1", "#1C1C1E"], // Silver, Space Gray
  },
  {
    id: 7,
    key: "APPLEDISPLAY",
    colors: ["#F5F5F7", "#A3AAAE"], // Silver, Space Gray
  },
  {
    id: 8,
    key: "ACCESSORIES",
    colors: ["#1C1C1E", "#F5F5F7", "#E8C5A3", "#0A84FF", "#FF9F0A"], // Black, White, Starlight, Blue, Orange
  },
];
//get the label only
const categoryOption = productCategory.map(item => item.label);

interface Props {
  handleWindowToggle: () => void,
  image1: string | null,
  setImage1: React.Dispatch<React.SetStateAction<string | null>>,
  image2: string | null,
  setImage2: React.Dispatch<React.SetStateAction<string | null>>,
  image3: string | null,
  setImage3: React.Dispatch<React.SetStateAction<string | null>>,
}

interface uploadImageProps {
  image: string | null,
  setImage: React.Dispatch<React.SetStateAction<string | null>>,
}

const UploadImageIcon = ({ image, setImage }: uploadImageProps) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file); // convert to base64 URL for preview
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
      <div className="text-[10px] text-center flex gap-[1.5px] cursor-pointer">
        Drop your images
        <label className="text-[10px] hover:text-blue-500 cursor-pointer underline">
          here
          <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
        </label>
      </div>
    </div>
  );
}
const AddingProductWindow = ({ handleWindowToggle, image1, image2, image3, setImage1, setImage2, setImage3 }: Props) => {
  // discount state
  const [discount, setDiscount] = useState<string>(discountOption[0]);

  // category + color
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryOption[0]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [availableColor, setAvailableColor] = useState<string[] | null>(productColor[0].colors);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const selectedCategoryKey = productCategory.find( item => item.label === category)?.key;

    if (selectedCategoryKey){
      const colors = productColor.find( item => item.key === selectedCategoryKey)?.colors || [];
      setAvailableColor(colors);
      setSelectedColor(null);
    }
  }



  return (
    <div className="bg-gray-200 w-full h-full flex p-5 gap-3 rounded-t-2xl shadow-2xl transition-all duration-500">
      {/* RIGHT SIDE */}
      <div className="bg-white w-2/3 rounded-2xl p-5 flex flex-col gap-4 justify-between shadow-md hover:shadow-lg transition-all duration-300">
        {/* FORM CONTENT */}
        <div className="flex flex-col gap-4 h-4/5 overflow-y-auto px-2 py-2">
          {/* HEADING */}
          <div className="font-orbitron font-[500] text-gray-800 text-lg mb-2 tracking-wide">
            General Information
          </div>

          {/* PRODUCT NAME & BRAND */}
          <div className="flex gap-4">
            {/* PRODUCT NAME */}
            <div className="flex flex-col w-1/2 gap-1 text-sm font-normal gap-1">
              <span className="px-1 text-gray-600">Product Name</span>
              <input
                type="text"
                placeholder="Product name..."
                className="border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              />
            </div>

            {/* BRAND */}
            <div className="flex flex-col w-1/2 gap-1 text-sm font-normal gap-1">
              <span className="px-1 text-gray-600">Brand</span>
              <input
                type="text"
                placeholder="Brand..."
                className="border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              />
            </div>
          </div>

          {/* PRODUCT CATEGORY & PRODUCTS */}
          <div className="flex gap-4">
            {/* PRODUCT CATEGORY */}
            {/* PRODUCT CATEGORY */}
          <div className="flex flex-col w-full gap-1 text-sm">
            <span className="px-1 text-gray-600">Product Category</span>
            <Listbox value={selectedCategory} onChange={handleCategoryChange}>
              <div className="relative">
                <Listbox.Button className="border rounded-lg px-4 py-2 w-full text-left flex justify-between items-center text-xs text-gray-800 focus:ring-2 focus:ring-blue-400">
                  {selectedCategory}
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg ring-1 ring-gray-200">
                  {categoryOption.map((option) => (
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

            {/* PRODUCT NUMBER */}
            <div className="flex flex-col w-1/2 gap-1 text-sm font-normal gap-1">
              <span className="px-1 text-gray-600">Product number</span>
              <input
                type="text"
                placeholder="Number of products"
                className="border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="flex flex-col h-[180px] gap-1 text-sm font-normal gap-1">
            <span className="px-1 text-gray-600">Description</span>
            <textarea
              placeholder="Description..."
              className="border rounded-lg px-3 py-2 text-xs resize-none h-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            ></textarea>
          </div>

          {/* PRICE & DISCOUNT */}
          <div className="flex gap-4">
            {/* SALE PRICE */}
            <div className="flex flex-col w-1/2 gap-1 text-sm font-normal gap-1">
              <span className="px-1 text-gray-600">Sale Price</span>
              <input
                type="text"
                placeholder="Sale price"
                className="border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              />
            </div>

            {/* DISCOUNT */}
            <div className="flex flex-col w-1/2 gap-1 text-sm font-normal gap-1">
              <span className="px-1 text-gray-600">Discount</span>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Discount"
                  className="border rounded-lg w-3/4 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                />
                <SelectorComponent
                  options={discountOption}
                  optionSelector={discount}
                  setOptionSelector={setDiscount}
                  rounded="rounded-lg"
                  width="w-2/5"
                  fontSize="text-sm"
                  height="h-10"
                />
              </div>
            </div>
          </div>

          {/* COLOR SELECTOR */}
          <div className="flex flex-col gap-2 text-sm font-normal mt-2">
            <span className="text-gray-700 font-medium px-1">Select Colors</span>
            <div className="flex flex-wrap gap-2 mt-1 px-2">
              {availableColor && availableColor.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-300 shadow-sm ${selectedColor === color
                    ? "scale-110 border-blue-500 ring-2 ring-blue-300"
                    : "border-gray-300 hover:scale-105 hover:ring-1 hover:ring-gray-300"
                    }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="w-full h-fit flex justify-between mt-4">
          <button className="border-[1px] px-4 py-2 rounded-lg text-xs hover:bg-gray-100 transition-all duration-200" onClick={() => handleWindowToggle()}>
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg text-xs bg-blue-500 text-white/90 hover:bg-blue-600 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-sm">
            Publish
          </button>
        </div>
      </div>

      {/* LEFT SIDE */}
      <div className="bg-white w-1/3 rounded-2xl shadow-md hover:shadow-lg flex flex-col gap-3 transition-all duration-300 py-4 px-4">
        {/* TAG  */}
        <div className="flex flex-col wfull gap-1 text-sm font-normal gap-2">
          <span className="px-1 text-gray-600">Tag</span>
          <input
            type="text"
            placeholder="Type and enter"
            className="border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          />
        </div>
        {/* IMAGE UPLOAD FROM USER  */}
        <div className="flex flex-col w-full gap-1 text-sm font-normal gap-2">
          <span className="px-1 text-gray-600">Product image</span>

          <div className="w-full h-[220px] gap-4 flex">
            {/* MAIN IMAGE */}
            <div className="w-1/2 h-full border rounded-lg flex justify-center items-center relative overflow-hidden group">
              {image1 ? (
                <Image
                  src={image1}
                  alt="Preview"
                  fill
                  className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <UploadImageIcon image={image1} setImage={setImage1} />
              )}
            </div>

            {/* SECONDARY IMAGES */}
            <div className="w-1/2 h-full gap-3 flex flex-col rounded-lg">
              {/* SECOND IMAGE */}
              <div className="w-full h-1/2 border rounded-lg flex justify-center items-center relative overflow-hidden group">
                {image2 ? (
                  <Image
                    src={image2}
                    alt="Preview"
                    fill
                    className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <UploadImageIcon image={image2} setImage={setImage2} />
                )}
              </div>

              {/* THIRD IMAGE */}
              <div className="w-full h-1/2 border rounded-lg flex justify-center items-center relative overflow-hidden group">
                {image3 ? (
                  <Image
                    src={image3}
                    alt="Preview"
                    fill
                    className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <UploadImageIcon image={image3} setImage={setImage3} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddingProductWindow;