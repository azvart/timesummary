import {NextResponse} from 'next/server';
async function middleware(req){

  console.log(req.headers.get('cookie'));
  return NextResponse.next();
}



export default middleware;