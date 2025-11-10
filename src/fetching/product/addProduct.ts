import axios from "axios";
import { useState } from "react";
import { URL, accessToken, ProductDetailType, ProductDetailRequestType } from "@/lib/data";

const path = `${URL}/crm/products`;

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
  requestBody.append("data", JSON.stringify(data));

  if (imageFile1) requestBody.append("image", imageFile1);
  // if (imageFile2) requestBody.append("image", imageFile2);
  // if (imageFile3) requestBody.append("image", imageFile3);

  return requestBody;
};

export const useAddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const requestAddingProduct = async ({ newDetailProduct, imageFile1, imageFile2, imageFile3 }: DataConvertProps) => {
    const formData = dataConvert({ newDetailProduct, imageFile1, imageFile2, imageFile3 });
    for (const [key, value] of Array.from(formData.entries())) {
      console.log(key, value);
    }
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(path, formData, {
        headers: {
          "Content-Type": "application/json", 
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setData(response.data);
      console.log("✅ Product added:", response.data);
      return response.data;
    } catch (err: any) {
      console.error("❌ Add product failed:", err);
      setError(err?.response?.data?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, requestAddingProduct };
};

export default useAddProduct;
