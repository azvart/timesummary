import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req){


  req.setHeaders('x-app-id','1');

NextResponse.next()
}