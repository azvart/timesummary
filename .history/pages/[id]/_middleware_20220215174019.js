



async function middleware(req,ev){
  console.log(req.cookies['user-session']);


}



export default middleware;