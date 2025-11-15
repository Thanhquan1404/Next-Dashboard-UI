import axios, { AxiosError } from "axios";
import { useState } from "react";
import { ProductDetailType, ProductDetailRequestType } from "@/lib/data.product";
import {URL, accessToken} from "@/lib/data";

const path = `${URL}/crm/products`;
// DATA TYPE 
export interface ResponseDataType {
  productId: string,
  sku: string,
  productName: string,
  description: string,
  productSubtitle: string, 
  productBrand: string,
  productCategory: string, 
  quantity: number,
  status: string, 
  purchaseUnitPrice: number,
  discount: number,
  discountType: string, 
  imageUrl: string,
}
// ERROR TYPE 
interface ResponseErrorType {
  code: number,
  errorField: string,
  message: string,
}
// RESPONSE DATA TYPE 
interface ApiResponse {
  code: number,
  message: string,
  data? : ResponseDataType,
  errors? : ResponseErrorType[],
}
// FUNCTION TO CONVERT USER INPUT INTO DATA REQUEST TYPE
interface DataConvertProps {
  newDetailProduct: ProductDetailType;
  imageFile1: File | null;
  imageFile2: File | null;
  imageFile3: File | null;
}

const dataConvert = ({ newDetailProduct, imageFile1, imageFile2, imageFile3 }: DataConvertProps): FormData => {
  const data: ProductDetailRequestType = {
    sku: newDetailProduct.SKU || `SP-${Date.now()}`,
    name: newDetailProduct.PRODUCT_NAME,
    description: newDetailProduct.DESCRIPTION,
    subtitle: newDetailProduct.PRODUCT_SUBTITLE,
    brand: newDetailProduct.PRODUCT_BRAND,
    category: newDetailProduct.PRODUCT_CATEGORY,
    quantity: newDetailProduct.PRODUCTS,
    status: newDetailProduct.STATUS,
    price: newDetailProduct.PURCHASE_UNIT_PRICE,
    discount: newDetailProduct.DISCOUNT,
    discountType: newDetailProduct.DISCOUNT_TYPE,
  };

  const requestBody = new FormData();
  const jsonBlob = new Blob([JSON.stringify(data)], { type: "application/json" });
  requestBody.append("data", jsonBlob);


  if (imageFile1) requestBody.append("image", imageFile1);
  // if (imageFile2) requestBody.append("image", imageFile2);
  // if (imageFile3) requestBody.append("image", imageFile3);

  return requestBody;
};

export const useAddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ResponseDataType | undefined>();
  const [error, setError] = useState<string | null>(null);

  const requestAddingProduct = async ({ newDetailProduct, imageFile1, imageFile2, imageFile3 }: DataConvertProps) => {
    const formData = dataConvert({ newDetailProduct, imageFile1, imageFile2, imageFile3 });
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(path, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const resData: ApiResponse = response.data;
      setData(resData.data);
      console.log("Send new product data successfully")
      return resData;
    } catch (err) {
      const errAxios = err as AxiosError<any>;
      const errData: ResponseErrorType[] = errAxios.response?.data.error;
      const errMes = errData[0].message;

      throw new Error(errMes);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, requestAddingProduct };
};

export default useAddProduct;
