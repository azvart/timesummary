import Layout from '../../Layout/index';
import { withSessionSSR } from '../../lib/sessionsWrappers';
import API from '../../config/index';
const Messages =(id = '') => {
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


export const getServerSideProps = withSessionSSR(async function getServerSideProps(ctx){
  console.log('revalidate')
  return {
    props:{
      user: ctx.req.session.user
    },
   
  }
})


export default Messages;



