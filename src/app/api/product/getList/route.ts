// /src/app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";
import { URL } from "@/lib/data";

const path = `${URL}/products`;

export async function GET(req: NextRequest) {
  const pageNo = req.nextUrl.searchParams.get("pageNo") || "";

  const cookieStore = req.cookies;
  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const response = await axios.get(path, {
      params: { pageNo },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (err) {
    const axiosErr = err as AxiosError<any>;
    const errorReturn = axiosErr.response?.data || {
      code: 500,
      message: "Unknown server error",
    };

    return NextResponse.json(errorReturn, { status: 500 });
  }
}
