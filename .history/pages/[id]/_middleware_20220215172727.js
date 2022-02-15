async function middleware(req,ev){
  const cookie = req.headers.get('cookie');
  const parser = Buffer.from(cookie,'base64').toString();
  console.log(parser);

}



export default middleware;