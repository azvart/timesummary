import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req){


req.headers.set('x-app-id', "1")

NextResponse.next()
}