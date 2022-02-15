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
  return{
    props:{}
  }
}



export default Messages;