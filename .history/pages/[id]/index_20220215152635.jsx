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
    paths:{
      params:{id:{}}
    }
  }
}

export async function getStaticProps(ctx){
  console.log(ctx);
  return{
    props:{}
  }
}



export default Messages;