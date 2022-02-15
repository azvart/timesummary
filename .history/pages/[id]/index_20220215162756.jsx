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

export const getServerSideProps = withSessionSSR(async function getServerSideProps(ctx){
  console.log(ctx.req.session);
  return {
    props:{

    }
  }
})


export default Messages;