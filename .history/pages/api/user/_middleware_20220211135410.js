import { NextRequest, NextResponse,  NextFetchEvent } from "next/server";


export function middleware(req, ev){

  new NextRequest("/api/user/all",{...req, user:{"email":"1"}})
  console.log(req);
  NextResponse.next();
}