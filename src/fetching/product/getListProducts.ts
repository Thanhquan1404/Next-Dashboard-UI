"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";

export const useGetListProducts = () => {
  const [data, setData] = useState<any | null>();
  const [error, setError] = useState<any | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const getListProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`/api/product/getList`);

      const resData = response.data;
      setData(resData.data);
      return resData;
    } catch (err) {
      const axiosErr = err as AxiosError<any>;
      const errMess =
        axiosErr.response?.data?.error?.message ||
        axiosErr.response?.data?.message ||
        axiosErr.message;

      throw new Error(errMess);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getListProducts };
};

export const useGetListProductWithPageNo = () => {
  const [data, setData] = useState<any | null>();
  const [error, setError] = useState<any | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const getListProductsWithPageNo = async (pageNumber: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`/api/product/getList`, {
        params: { pageNo: pageNumber },
      });

      const resData = response.data;
      setData(resData.data);

      return resData;
    } catch (err) {
      const axiosErr = err as AxiosError<any>;
      const errMess =
        axiosErr.response?.data?.error?.message ||
        axiosErr.response?.data?.message ||
        axiosErr.message;

      throw new Error(errMess);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getListProductsWithPageNo };
};
