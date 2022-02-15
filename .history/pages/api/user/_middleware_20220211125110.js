import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){


  console.log(ev);

NextResponse.next({"user":"vlad"})
}