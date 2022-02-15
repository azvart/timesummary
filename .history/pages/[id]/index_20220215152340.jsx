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



export async function getServerSideProps({req, res}){
  console.log(req.headers);
  return{
    props:{}
  }
}



export default Messages;