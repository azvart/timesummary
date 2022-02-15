import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){

  const newreq = Object.assign({
    user:{
      "email":"vlad"
    }
  },req);
  console.log(req);
  new Response(req);
  NextResponse.next();
}