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
        id:{}
      }
    ],
    fallback: true,
  }
};

export async function getStaticProps({params}){
  return {
    props:{

    }
  }
}

export default Messages;