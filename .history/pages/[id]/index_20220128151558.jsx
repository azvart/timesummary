import Layout from '../../Layout/index';
import { useAuth } from '../../hooks/useAuth';
import { Grid, Button } from 'semantic-ui-react';
import RoleSideBar from '../../Layout/roleSideBar';

const Messages =() => {
  const auth = useAuth()
  return (
   <>
   
   </>
  )
}


Messages.getLayout = (page) => (
  <Layout>
    <RoleSideBar>
    {page}
    </RoleSideBar>
  </Layout>
)


export async function getServerSideProps({req, res}){
  return {
    props:{
      
    }
  }
}


export default Messages;