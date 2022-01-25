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
      {params: {id: 'admin'}}
    ],
    fallback: false,
  }
};

export async function getStaticProps({id}){
  return {
    props:{

    }
  }
}

export default Messages;