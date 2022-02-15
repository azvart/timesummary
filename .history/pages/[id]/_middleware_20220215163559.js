import {NextResponse} from 'next/server';
async function middleware(req){

  console.log(req.cookieParser());
  return NextResponse.next();
}



export default middleware;