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

export async function getStatisPath(){


  return {
    paths:{}
  }
}

export async function getStaticProps(ctx){
  console.log(ctx);
  return{
    props:{}
  }
}



export default Messages;