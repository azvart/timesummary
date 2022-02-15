import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){

 new Request("user","1")
  NextResponse.next();
}