import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){

  console.log("fetch event",ev.respondWith('1'));
  console.log("request in middleware", req);

  NextResponse.next();
}