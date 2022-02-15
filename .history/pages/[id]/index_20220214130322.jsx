import Layout from '../../Layout/index';
import { useAuth } from '../../hooks/useAuth';
import { Grid, Button } from 'semantic-ui-react';
import { withSessionSSR } from '../../lib/sessionsWrappers';
import jwt from 'jsonwebtoken';
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
  async function getServerSideProps({req}){

    return {
      props:{
        user: req.session.user
      }
    }
  }
)

export default Messages;