import Layout from '../../Layout/index';
import { useAuth } from '../../hooks/useAuth';
const Messages =() => {
  const auth = useAuth()
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

export async function getStaticPath(){
  return {
    paths:{
      params:{}
    }
  }
}


export async function getStatisProps(context){

  return {
    props:{}
  }
}

// export const getServerSideProps = withSessionSSR(
//   async function getServerSideProps({req, params}){
//     await dbConnect();
//     const token = req.session.user;
//     const { id } = params;
//     if(!token){
//       return {
//         props:{},
//       }
//     }

//     const decode = jwt.decode(token, process.env.SECRET);

//     return {
//       props:{
//         user: req.session.user
//       }
//     }
//   }
// )

export default Messages;