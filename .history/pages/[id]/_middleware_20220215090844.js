import { NextResponse } from 'next/server';
async function middleware(req, ev){

  console.log(req.headers);
  console.log(ev);
  NextResponse.next();
}

export default middleware;