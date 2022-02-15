import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){


  return new Response(
    JSON.stringify({
      email:"vlad"
    }),
    {headers: {"Content-Type":'application/json'}}
  )
}