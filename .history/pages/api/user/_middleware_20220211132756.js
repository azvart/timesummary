import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){

  req.getPage()
  NextResponse.next();
}