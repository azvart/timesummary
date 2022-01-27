import Layout from '../../Layout/index';
import { useAuth } from '../../hooks/useAuth';
import { Grid, Button } from 'semantic-ui-react';


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


export async function getServerSideProps({req, res}){
  return {
    props:{
      
    }
  }
}


export default Messages;