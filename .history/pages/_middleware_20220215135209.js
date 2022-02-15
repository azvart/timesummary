import { NextResponse } from 'next/server';



async function middleware(req){
  console.log(req);
  return NextResponse.next();
}


export default middleware;