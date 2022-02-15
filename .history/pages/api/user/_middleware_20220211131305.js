import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){

  new Request(JSON.stringify({user:{"email":"vlad"}}))

  NextResponse.next();
}