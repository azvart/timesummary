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

export async function getStaticPath(){
  return {
    paths:[
      {
        params:{}
      }
    ],
    fallback: true,
  }
}

export default Messages;