import { NextRequest, NextResponse } from "next/server";
import {URL} from "@/lib/data";
import { cookies } from "next/headers";
import { resolveNaptr } from "dns";

const path =`${URL}/authentication`;

export async function POST(req: NextRequest){
  try {
    const cookieStorage = cookies();
    const accessToken = cookies();

    if (!accessToken){
      return NextResponse.json(
        {code: 400, message: "Unauthorized"},
        {status: 400}
      )
    }

    const resBackend = await fetch(`${path}/logout`, {
      method: "POST",
      headers: {
        Authentication: `Bearer ${accessToken}`
      }
    });

    const result = await resBackend.json();

    if (!resBackend.ok){
      return NextResponse.json(
        {code: 500, message: "Fail to logout"},
        {status: 500}
      );
    }

    return NextResponse.json(
      {code: 200, message: "Successfully log out"},
      {status: 200}
    )
  } catch (error) {
    return NextResponse.json(
      {code: 500, message: "Internal connection failed"},
      {status: 500}
    )
  }
}