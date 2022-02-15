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

export async function getStaticPaths(){

  return {
    paths:[]
  }
}

export const getStaticProps = withSessionSSR(async function getStaticProps(ctx){
  console.log('revalidate')
  return {
    props:{
      id:"1"
    },
    revalidate: 1
  }
})


export default Messages;