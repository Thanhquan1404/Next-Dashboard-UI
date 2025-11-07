"use client";
import AddingProductWindow from "./AddingProductWindow";
import CategoryOptions from "./CategoryOptions";
import ProductsPageHeader from "./ProductsPageHeader";
import ProductsTable from "./ProductsTable";
import { useEffect, useState, useRef } from "react";
import { sampleProducts, ProductDataType, ProductDetailType} from "@/lib/data";
import ProductDetailWindow from "./ProductDetailWindow";
import useGetListProducts from "@/fetching/product/getListProducts";

// FUNCTION TO ASSIGN PRODUCT DETAIL INTO PRODUCT IN TABLE
const productTableData = (listProductDetail: ProductDetailType[]): ProductDataType[] => {
  // Compute public (final) price after discount
  const publicProductPrice = (discountType: string, productPrice: number, discountValue: number): number => {
    if (discountType === "PERCENT") {
      return productPrice * (1 - discountValue / 100);
    } else if (discountType === "fixed") {
      return productPrice - discountValue;
    } else {
      // no valid discount type
      return productPrice;
    }
  };

  const result: ProductDataType[] = listProductDetail.map((item) => {
    const product: ProductDataType = {
      PRODUCT_ID: item.PRODUCT_ID,
      PRODUCT_NAME: item.PRODUCT_NAME,
      PRODUCT_SUBTITLE: item.PRODUCT_SUBTITLE,  
      PURCHASE_UNIT_PRICE: publicProductPrice(item.DISCOUNT_TYPE, item.PURCHASE_UNIT_PRICE, item.DISCOUNT),
      PRODUCTS: item.PRODUCTS,
      SKU: item.SKU,
      STATUS: item.STATUS,
      ACTION: "",
    }
    return product;
  })
  return result;
}
const Page = () => {
  // INITIALIZE FETCHING FUNCTION 
  const { loading, data, error, getListProducts } = useGetListProducts();
  // STATE HOOK TO HANDLE PRODUCTS ARRAY
  const [products, setProducts] = useState<ProductDataType[]>([]);
  // STATE HOOK TO HANDLE DETAIL PRODUCT ARRAY
  const [detailProducts, setDetailProducts] = useState<ProductDetailType[]>([]);
  // STATE HOOK TO MAKE ADDING WINDOW APPEAR
  const [windowVisible, setWindowVisible] = useState<boolean>(false);
  // STATE HOOK TO MAKE DETAIL PRODUCT WINDOW APPEAR 
  const [productDetailVisible, setProductDetailVisible] = useState<boolean>(false);
  // STATE HOOK TO TAKE CHOOSEN PRODUCT 
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  // upload image 1 state 
  const [image1, setImage1] = useState<string | null>(null);
  // upload image 2 state 
  const [image2, setImage2] = useState<string | null>(null);
  // upload image 3 state 
  const [image3, setImage3] = useState<string | null>(null);
  // FUNCTION TO HANDLE 'ADDING' WINDOW TOGGLE
  const handleWindowToggle = (): void => {
    setWindowVisible((prev) => !prev);
  };
  // FUNCTION TO FETCHING DATA
  const hasFetched = useRef(false);
  useEffect(() => {
    const fetchProducts = async () => {
      if (!hasFetched.current) {
        const resData = await getListProducts();

        if (resData) {
          const listDetailProduct: ProductDetailType[] = resData.map((item) => {
            const result: ProductDetailType = {
              PRODUCT_ID: item.productId,
              PRODUCT_BRAND: item.productBrand,
              PRODUCT_CATEGORY: item.productCategory,
              PRODUCT_NAME: item.productName,
              DESCRIPTION: item.description,
              PRODUCT_SUBTITLE: item.productSubtitle,
              PURCHASE_UNIT_PRICE: item.purchaseUnitPrice,
              PRODUCTS: item.quantity,
              SKU: item.sku,
              STATUS: item.status,
              IMAGE1_URL: item.imageUrl,
              IMAGE2_URL: "",
              IMAGE3_URL: "",
              TAG: "",
              DISCOUNT: item.discount,
              DISCOUNT_TYPE: item.discountType,
              COLOR: "",
            };
            return result;
          });
          setDetailProducts(listDetailProduct);
        }
        hasFetched.current = true;
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(detailProducts);
    const data: ProductDataType[] = productTableData(detailProducts);
    setProducts(data);
  }, [detailProducts]);

  // FUNCTION TO HANDLE 'ADDING PRODUCT' ACTION
  const handleAddingProductEvent = (newProduct: ProductDataType): void => {
    const arr = [...products];
    arr.push(newProduct);
    setProducts(arr);
    console.log(arr);
  }
  // FUNCTION TO HANDLE 'ADDING PRODUCT DETAIL' ACTION
  const handleAddingDetailProductEvent = (newProductDetail: ProductDetailType): void => {
    const arr = [...detailProducts];
    arr.push(newProductDetail);
    setDetailProducts(arr);
  }
  //  FUNCTION TO HANDLE 'VIEW PRODUCT DETAIL' ACTION
  const handleDetailProductWindowToggle = (product: HTMLElement | null): void => {
    setProductDetailVisible((prev) => !prev);
    if (product) {
      const productID = product.getAttribute("id");
      setSelectedProduct(productID);
      console.log("Retrieve product ID successfully");
    }
    else {
      setSelectedProduct(null);
      console.log("clear the set Selected Product");
    }
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="bg-transparent w-full h-full flex flex-col gap-1">
        {/* PAGE HEADER */}
        <ProductsPageHeader handleWindowToggle={handleWindowToggle} />
        {/* CATEGORY FILTER */}
        <CategoryOptions />
        {/* PRODUCT TABLE */}
        <ProductsTable sampleProducts={products} handleWindowToggle={handleWindowToggle} handleDetailProductWindowToggle={handleDetailProductWindowToggle} />
      </div>

      {/* --- ADDING PRODUCT WINDOW OR PRODUCT DETAIL WINDOW */}
      {productDetailVisible ? (
        <>
          {/* --- BACKDROP-PRODUCT DETAIL WINDOW --- */}
          <div
            className={`fixed inset-0 z-[90] transition-all duration-500 ${windowVisible
              ? "bg-black/40 backdrop-blur-sm visible opacity-100"
              : "invisible opacity-0"
              }`}
            onClick={() => {
              handleWindowToggle();
              handleDetailProductWindowToggle(null);
            }}
          ></div>

          {/* --- PRODUCT DETAIL WINDOW --- */}
          <div
            className={`fixed left-0 w-full h-full rounded-t-2xl absolute shadow-lg z-[100] transition-transform duration-500 ${windowVisible ? "bottom-0" : "translate-y-full"
              }`}
          >
            <ProductDetailWindow
              productID={selectedProduct}
              detailProductArray={detailProducts}
              image1={image1}
              image2={image2}
              image3={image3}
              setImage1={setImage1}
              setImage2={setImage2}
              setImage3={setImage3}
              handleWindowToggle={handleWindowToggle}
            />
          </div>
        </>
      ) : (
        <>
          {/* --- BACKDROP --- */}
          <div
            className={`fixed inset-0 z-[90] transition-all duration-500 ${windowVisible
              ? "bg-black/40 backdrop-blur-sm visible opacity-100"
              : "invisible opacity-0"
              }`}
            onClick={handleWindowToggle}
          ></div>

          {/* --- ADDING PRODUCT WINDOW --- */}
          <div
            className={`fixed left-0 w-full h-full rounded-t-2xl absolute shadow-lg z-[100] transition-transform duration-500 ${windowVisible ? "bottom-0" : "translate-y-full"
              }`}
          >
            <AddingProductWindow
              handleWindowToggle={handleWindowToggle}
              handleAddingDetailProductEvent={handleAddingDetailProductEvent}
              image1={image1}
              image2={image2}
              image3={image3}
              setImage1={setImage1}
              setImage2={setImage2}
              setImage3={setImage3}
              handleAddingProductEvent={handleAddingProductEvent}
            />
          </div>
        </>
      )}




    </div>
  );
};

export default Page;
