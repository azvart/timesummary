import {NextResponse} from 'next/server';
async function middleware(req){

  console.log(req.session.user);
  return NextResponse.next();
}



export default middleware;