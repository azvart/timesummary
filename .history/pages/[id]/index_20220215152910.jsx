import Layout from '../../Layout/index';
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

  console.log(ctx.req.headers);
  return {
    props:{}
  }
}



export default Messages;