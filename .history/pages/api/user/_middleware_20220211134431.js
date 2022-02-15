import { NextRequest, NextResponse,  NextFetchEvent } from "next/server";


export function middleware(req){

  req.user = {"user":"1"}
  console.log(req);

  new Response(req);
  NextResponse.next();
}