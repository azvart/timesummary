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

export async function getServerSideProps(ctx){

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