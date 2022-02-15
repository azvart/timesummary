async function middleware(req, ev){
  console.log("middleware user",req.headers.get('x-auth-acces'));
}



export default middleware;