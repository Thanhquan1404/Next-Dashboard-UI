import { useState } from "react";
import axios from "axios";
import { URL, accessToken } from "@/lib/data";

const path = `${URL}/crm/products/csv`;
// CONVERT TO REQUEST BODY
const requestBody = (csvFile: File, fileHeader: string[], productProperty: string[]) => {
  const body = new FormData();
  body.append("userHeader", new Blob([JSON.stringify(fileHeader)], { type: "application/json"}))
  body.append("systemHeader", new Blob([JSON.stringify(productProperty)], {type: "application/json"}))
  body.append("file", csvFile);

  return body;
}
const useBrowseCSVFile = () => {
  //STATE
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();

  const sendCSV = async (csvFile: File, fileHeader: string[], productProperty: string[]) => {
    const formData = requestBody(csvFile, fileHeader, productProperty);
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(path, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });
      console.log(response);
    } catch (err: any) {
      
    }
  }

  return {loading, data, error, sendCSV};
}
export default useBrowseCSVFile;