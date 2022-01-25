import Layout from '../../Layout/index';
import { useAuth } from '../../hooks/useAuth';



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
  console.log(ctx.req.cookie);
  return {
    props:{
      
    }
  }
}


export default Messages;