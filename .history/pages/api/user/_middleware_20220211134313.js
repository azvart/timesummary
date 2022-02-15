import { NextRequest, NextResponse,  NextFetchEvent } from "next/server";


export function middleware(req){

  console.log(req.user = {"user":"1"});
  console.log(req);


  NextResponse.next();
}