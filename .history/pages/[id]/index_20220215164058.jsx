import Layout from '../../Layout/index';
import { withSessionSSR } from '../../lib/sessionsWrappers';
import API from '../../config/index';
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

export const getServerSideProps = withSessionSSR(async function getStaticProps(ctx){
  
  return {
    props:{

    },
    revalidate: 1
  }
})


export default Messages;