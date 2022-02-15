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
  console.log('revalidate')
  return {
    props:{
      title:"Heelo",
      user:[]
    },
    revalidate: 1
  }
})


export default Messages;