import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req){


  req.user = {"name":"vlad","email":"email"}

NextResponse.next()
}