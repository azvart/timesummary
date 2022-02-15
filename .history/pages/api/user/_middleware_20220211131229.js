import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){

  Response(JSON.stringify({user:{"email":"vlad"}}))

  NextResponse.next();
}