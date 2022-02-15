import { NextResponse } from 'next/server';
async function middleware(req){
  console.log(req.headers.get('x-auth-access'));
  NextResponse.next();
}



export default middleware;