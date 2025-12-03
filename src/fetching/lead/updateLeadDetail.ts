"use client";

import axios, {AxiosError} from "axios";
import { useState } from "react";

const path = `${URL}/leads`
const useUpdateLeadDetail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();

  const updateLeadDetail = async () => {

  }
}