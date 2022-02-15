import { NextRequest, NextResponse, NextFetchEvent } from "next/server";



export function middleware(req, ev){

  const newreq = Object.assign({
    user:{
      "email":"vlad"
    }
  },req);
  new Request(newre');
  NextResponse.next();
}