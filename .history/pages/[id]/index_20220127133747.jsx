import Layout from '../../Layout/index';
import { useAuth } from '../../hooks/useAuth';



const Messages =() => {
  const auth = useAuth()
  return (
    <div>
      <button onClick={() => auth.visibleSideBar()}>Visible</button>
    </div>
  )
}


Messages.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)


export async function getServerSideProps({req, res}){
  return {
    props:{
      
    }
  }
}


export default Messages;