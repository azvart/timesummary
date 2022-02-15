import { NextRequest, NextResponse,  NextFetchEvent } from "next/server";


export function middleware(req, ev){

  req.user = {"user":"1"}

  NextRequest("user",{email:"1"})
  console.log(req);
  NextResponse.next();
}