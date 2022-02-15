import Layout from '../../Layout/index';
import { useAuth } from '../../hooks/useAuth';
import { Grid, Button } from 'semantic-ui-react';
import { withSessionSSR } from '../../lib/sessionsWrappers';
import jwt from 'jsonwebtoken';
import User from '../../models/user.model';
import Password from '../../models/password.model';
import dbConnect from '../../lib/mongooseConnect';
const Messages =() => {
  const auth = useAuth()
  return (
   <>
   
   </>
  )
}


Messages.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)


export const getServerSideProps = withSessionSSR(
  async function getServerSideProps({req, params}){
    await dbConnect();
    const token = req.session.user;
    if(!token){
      return {
        props:{},
        redirect:{
          destination:'/',
          permanent: true
        }
      }
    }
    const { id } = params;
    const decode = jwt.decode(token, process.env.SECRET);

    return {
      props:{
        user: req.session.user
      }
    }
  }
)

export default Messages;