import Layout from '../../Layout/index';
import { withSessionSSR } from '../../lib/sessionsWrappers';
const Messages =() => {
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

export async function getServerSideProps(ctx){

  return {
    props:{}
  }
}



export default Messages;