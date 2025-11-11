"use client";
import AddingProductWindow from "./AddingProductWindow";
import CategoryOptions from "./CategoryOptions";
import ProductsPageHeader from "./ProductsPageHeader";
import ProductsTable from "./ProductsTable";
import { useEffect, useState, useRef } from "react";
import { ProductDataType, ProductDetailType } from "@/lib/data.product";
import ProductDetailWindow from "./ProductDetailWindow";
import useGetListProducts from "@/fetching/product/getListProducts";
import useDeleteProduct from "@/fetching/product/deleteProduct";

// FUNCTION TO ASSIGN PRODUCT DETAIL INTO PRODUCT IN TABLE
const productTableData = (listProductDetail: ProductDetailType[]): ProductDataType[] => {
  // COMPUTE FINAL PUBLIC PRICE
  const publicProductPrice = (discountType: string, productPrice: number, discountValue: number): number => {
    if (discountType === "PERCENT") {
      return productPrice * (1 - discountValue / 100);
    } else if (discountType === "AMOUNT") {
      return productPrice - discountValue;
    } else {
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
  // INITIALIZE GET PRODUCT FETCHING FUNCTION 
  const {
    loading: loadingGetListProducts,
    data: dataGetListProducts,
    error: errorGetListProducts,
    getListProducts
  } = useGetListProducts();
  // INITIALIZE DELETE PRODUCT FETCHING FUNCTION
  const {
    loading: loadingDeleteProduct,
    error: errorDeleteProduct,
    deleteProduct
  } = useDeleteProduct();
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

  // FUNCTION TO HANDLE 'ADDING' WINDOW TOGGLE
  const handleWindowToggle = (): void => {
    setWindowVisible((prev) => !prev);
  };
  // FUNCTION TO FETCHING DATA
  const hasFetched = useRef(false);
  useEffect(() => {
    const fetchProducts = async () => {
      if (!hasFetched.current) {
        try {
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
          else {
            alert("Fail to get list of products");
          }
        } catch (error) {
          alert(`List product fetching data error \n${error}`);
        } finally {
          hasFetched.current = true;
        }
      }
    };

    fetchProducts();
  }, []);
  // FUNCTION TO HANDLE EVEN IF THE PRODUCT DETAILS ARRAY CHANGED
  useEffect(() => {

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
    console.log(newProductDetail);
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
  // FUNCTION TO HANDLE 'DELETE SPECIFIC PRODUCT' ACTION
  const handleDeleteProductButtonToggle = async (product: HTMLElement | null): Promise<void> => {
    const productId = product?.getAttribute("id");

    if (productId) {
      try {
        const response = await deleteProduct(productId);

        if (response && response.code === 200) {
          alert(response.message || "Product deleted successfully!");
        } else {
          alert("Delete failed!");
        }
      } catch (error) {
        alert(`Delete failed ${error}`);
      }
    } else {
      alert("Invalid product ID!");
    }
  };


  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="bg-transparent w-full h-full flex flex-col gap-1">
        {/* PAGE HEADER */}
        <ProductsPageHeader handleWindowToggle={handleWindowToggle} />
        {/* CATEGORY FILTER */}
        <CategoryOptions detailProducts={detailProducts} setDetailProducts={setDetailProducts} />
        {/* PRODUCT TABLE */}
        <ProductsTable handleDeleteProductButtonToggle={handleDeleteProductButtonToggle} sampleProducts={products} handleWindowToggle={handleWindowToggle} handleDetailProductWindowToggle={handleDetailProductWindowToggle} />
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
              handleAddingProductEvent={handleAddingProductEvent}
            />
          </div>
        </>
      )}




    </div>
  );
};

export default Page;
