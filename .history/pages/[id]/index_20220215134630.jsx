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



export async function getServerSideProps(context){
  console.log(context.req);
  return{
    props:{}
  }
}



export default Messages;