import { NextResponse } from 'next/server';
async function middleware(req, ev){

  NextResponse.next();
}

export default middleware;