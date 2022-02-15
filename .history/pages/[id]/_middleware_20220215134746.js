import {NextResponse} from 'next/server';
async function middleware(req){


  return NextResponse.next();
}



export default middleware;