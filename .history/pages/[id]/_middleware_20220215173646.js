import { withIronSessionSSR } from '../../lib/sessionsWrappers';





async function middleware(req,ev){
  console.log(req.session);


}



export default withIronSessionSSR(middleware);