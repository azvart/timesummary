import { NextRequest, NextResponse,  NextFetchEvent } from "next/server";


export function middleware(req){

  req.user = {"user":"1"}
  console.log(req.user);
  NextResponse.next();
}