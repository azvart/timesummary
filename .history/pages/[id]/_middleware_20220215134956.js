import {NextResponse} from 'next/server';
async function middleware(req){

  console.log(req.headers);
  return NextResponse.next();
}



export default middleware;