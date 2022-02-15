import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){


  console.log(ev);
  new Response()
NextResponse.next({"user":"vlad"})
}