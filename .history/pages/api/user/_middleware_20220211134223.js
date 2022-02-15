import { NextRequest, NextResponse,  NextFetchEvent } from "next/server";


export function middleware(req){

  console.log(typeof req)


  NextResponse.next();
}