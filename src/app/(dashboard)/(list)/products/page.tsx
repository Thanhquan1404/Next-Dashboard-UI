"use client";
import AddingProductWindow from "./AddingProductWindow";
import CategoryOptions from "./CategoryOptions";
import ProductsPageHeader from "./ProductsPageHeader";
import ProductsTable from "./ProductsTable";
import { useState } from "react";
import { sampleProducts, ProductDataType } from "@/lib/data";

const Page = () => {
  // STATE HOOK TO HANDLE PRODUCTS ARRAY
  const [products, setProducts] = useState<ProductDataType[]>(sampleProducts);
  // STATE HOOK TO MAKE ADDING WINDOW APPEAR
  const [windowVisible, setWindowVisible] = useState<boolean>(false);
  // upload image 1 state 
  const [image1, setImage1] = useState<string | null>(null);
  // upload image 2 state 
  const [image2, setImage2] = useState<string | null>(null);
  // upload image 3 state 
  const [image3, setImage3] = useState<string | null>(null);

  // FUNCTION TO HANDLE 'ADDING' WINDOW TOGGLE
  const handleWindowToggle = (): void => {
    setWindowVisible((prev) => !prev);
    setImage1(null);
    setImage2(null);
    setImage3(null);
  };
  // FUNCTION TO HANDLE 'ADDING PRODUCT' ACTION
  const handleAddingProductEvent = (newProduct: ProductDataType): void => {
    const arr = [...products];
    arr.push(newProduct);
    setProducts(arr);
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="bg-transparent w-full h-full flex flex-col gap-1">
        {/* PAGE HEADER */}
        <ProductsPageHeader handleWindowToggle={handleWindowToggle} />
        {/* CATEGORY FILTER */}
        <CategoryOptions />
        {/* PRODUCT TABLE */}
        <ProductsTable sampleProducts={products}/>
      </div>

      {/* --- BACKDROP OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[90] transition-all duration-500 ${
          windowVisible
            ? "bg-black/40 backdrop-blur-sm visible opacity-100"
             : "invisible opacity-0"
        }`}
        onClick={handleWindowToggle} // click outside to close
      ></div>

      {/* --- ADDING WINDOW --- */}
      <div
        className={`fixed left-0 w-full h-full rounded-t-2xl absolute shadow-lg z-[100] transition-transform duration-500 ${
          windowVisible ? "bottom-0" : "translate-y-full"
        }`}
      >
        <AddingProductWindow 
          handleWindowToggle={handleWindowToggle} 
          image1={image1}
          image2={image2}
          image3={image3}
          setImage1={setImage1}
          setImage2={setImage2}
          setImage3={setImage3}
          handleAddingProductEvent={handleAddingProductEvent}
        />
      </div>
    </div>
  );
};

export default Page;
