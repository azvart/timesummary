



async function middleware(req,ev){
  console.log(req.session);


}



export default withIronSessionSSR(middleware);