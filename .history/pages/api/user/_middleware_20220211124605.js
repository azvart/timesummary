import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req){


console.log(req.headers.set('x-app-id', "1"));

NextResponse.next()
}