import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){

  new Response(JSON.stringify({user:{"email":"vlad"}}))

  NextResponse.next();
}