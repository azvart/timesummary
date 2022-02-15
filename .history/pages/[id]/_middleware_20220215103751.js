import { NextResponse } from 'next/server';
async function middleware(req, ev){

  console.log(req.headers)
  NextResponse.next();
}

export default middleware;