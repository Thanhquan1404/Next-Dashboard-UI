import { useState } from "react"

const useUploadCSV = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const uploadCSV = async (matching: Record<string, string>, file: File) => {
    setLoading(true);
    const payload = dataConvert(matching, file);

    try{
      const resBackend = await fetch("api/lead/uploadCSV", {
        method: "POST",
        credentials: "include",
        body: payload
      })

      const result = await resBackend.json();

      if (!resBackend.ok){
        console.log(result);
        return;
      }

      console.log(result);
      return;
    }catch{
      return {
        code: 500,
        message: "Internal connection failed"
      }
    }
  }

  return {loading, uploadCSV};
}

const dataConvert = (matching: Record<string, string>, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const wrappedMatching = {
    matching: matching
  }

  const jsonString = JSON.stringify(wrappedMatching, null, 2);
  const blob = new Blob([jsonString], {type: "application/json"});
  const fileJSON = new File([blob], "matching.json", {type: "application/json"});

  formData.append("matching", fileJSON);

  return formData;
}

export default useUploadCSV;