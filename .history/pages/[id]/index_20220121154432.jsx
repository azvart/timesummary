import Layout from '../../Layout/index';




const Messages =() => {
  return (
    <div>
      <h2>Hello</h2>
    </div>
  )
}


Messages.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)


export async function getServerSideProps(ctx){

  return {
    props:{
      
    }
  }
}


export default Messages;