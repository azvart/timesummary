import { NextRequest, NextResponse,  NextFetchEvent } from "next/server";


export function middleware(req, ev){

  req.user = {"user":"1"}
  console.log(req.user);
  console.log(ev);

  NextResponse.next();
}