import Layout from '../../Layout/index';
import { useAuth } from '../../hooks/useAuth';
import { Grid, Button } from 'semantic-ui-react';
import { withSessionSSR } from '../../lib/sessionsWrappers';

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


// export async function getServerSideProps({req, res}){
//   return {
//     props:{
      
//     }
//   }
// }

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