import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){

  
  new Response(req);
  NextResponse.next();
}