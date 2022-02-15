async function middleware(req,ev){
  const cookie = req.headers.get('cookie');
  console.log(req.headers.get('cookie'));
  console.log(req.cookieParser(cookie))
}



export default middleware;