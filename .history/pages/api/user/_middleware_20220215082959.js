async function middleware(req){
  console.log(req.headers.get('x-auth-access'));
}



export default middleware;