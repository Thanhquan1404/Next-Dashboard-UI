import { getToken } from "@/service/localStorageService";
import {URL} from "@/lib/data";
import axios, {AxiosError} from "axios";
import { useState } from "react";
import { ApiResponse } from "@/lib/data";
import { leadStageType, AssignedUser, LeadDetailType } from "@/lib/data.leads";
const path = `${URL}/leads`;

export interface ApiResponseDataType {
  id: string;
  fullName: string;
  dateOfBirth: string; 
  email: string;
  phoneNumber: string;
  company: string;
  closingDate: string; 
  rating: number;
  expectedRevenue: number;
  note: string;
  avatarUrl: string;
  stage: {
    id: string,
    name: string,
    color: string,
  };
  createdAt: string;
  updatedAt: string; 
  assignTo: AssignedUser;
}

const mappingResponseData = (responseLeadDetail: ApiResponseDataType): LeadDetailType =>{
  const leadDetail: LeadDetailType = {
    leadID: responseLeadDetail.id,
    avatarURL: responseLeadDetail.avatarUrl,
    name: responseLeadDetail.fullName,
    expectedValue: responseLeadDetail.expectedRevenue,
    company: responseLeadDetail.company,
    nation: "",
    createdDate: responseLeadDetail.createdAt,
    phone: responseLeadDetail.phoneNumber,
    email: responseLeadDetail.email,
    rating: responseLeadDetail.rating,
    source: "",
    status: responseLeadDetail.stage.name,
    assignTo: responseLeadDetail.assignTo.lastName + " " + responseLeadDetail.assignTo.firstName,
  }

  return leadDetail; 
}

const useGetLeadDetail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();

  const accessToken = getToken();
  const getLeadDetailInformation = async (leadID: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${path}/${leadID}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      const responseData: ApiResponse = response.data;
      const data: ApiResponseDataType = responseData.data;
      return mappingResponseData(data);
    } catch (err) { 
      console.log(err);
    }
    finally{
      setLoading(false);
    }
  }

  return {loading, data, error, getLeadDetailInformation}
}

export default useGetLeadDetail;