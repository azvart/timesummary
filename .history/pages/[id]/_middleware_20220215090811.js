import { NextResponse } from 'next/server';
async function middleware(req, ev){

  console.log(req);
  console.log(ev);
  NextResponse.next();
}

export default middleware;