import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){


  NextResponse.next({"email":"vlad"},{headers:{"x-app-id":"1"}})
}