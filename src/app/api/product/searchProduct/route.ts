import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { URL } from "@/lib/data";
import { AxiosError } from "axios";

const path = `${URL}/products`

export async function GET(req: NextRequest) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      return NextResponse.json(
        { code: 400, message: "Unauthorized" },
        { status: 400 }
      )
    }

    const query = req.nextUrl.searchParams.get("query");

    const status = req.nextUrl.searchParams.get("status");
    const orderBy = req.nextUrl.searchParams.get("orderBy");

    let more: string = "";
    if (status){
      more = more + `&status=${status}`;
    }
    if (orderBy){
      more = more + `&orderBy=${orderBy}`;
    }

    const resBackend = await fetch(`${path}/search?query=${query}${more}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const result = await resBackend.json();

    return NextResponse.json(
      result,
      { status: resBackend.status }
    )
  } catch (err) {
    const errAxios = err as AxiosError<any>;
    const errMes =
      errAxios.response?.data?.message ||
      errAxios.message ||
      "Unknown error";

    return NextResponse.json(
      { code: 500, message: errMes },
      { status: 500 }
    );
  }
}