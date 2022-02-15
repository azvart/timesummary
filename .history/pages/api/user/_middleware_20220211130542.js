import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){

  console.log("fetch event",ev.waitUntil());
  console.log("request in middleware", req);

  NextResponse.next();
}