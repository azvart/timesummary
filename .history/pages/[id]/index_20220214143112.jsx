import Layout from '../../Layout/index';
import { useAuth } from '../../hooks/useAuth';
import { Grid, Button } from 'semantic-ui-react';
import { withSessionSSR } from '../../lib/sessionsWrappers';
import jwt from 'jsonwebtoken';
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
    const { id } = params;
    if(!token){
      return {
        props:{},
        redirect:{
          destination:'/',
          permanent: false
        }
      }
    }

    const decode = jwt.decode(token, process.env.SECRET);

    return {
      props:{
        user: req.session.user
      }
    }
  }
)

export default Messages;