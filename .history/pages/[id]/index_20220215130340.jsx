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
  console.log(context);
  return{
    props:{}
  }
}



export default Messages;