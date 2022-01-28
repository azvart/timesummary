import Layout from '../../Layout/index';
import ReportsPage from '../../components/layout/reports-layout/index';




const Reports = () => {
  return (
    <ReportsPage />
  )
}




Reports.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)


export async function getServerSideProps(ctx){
  console.log(sessionStorage.getItem(token));
  return {
    props:{
      
    }
  }
}

export default Reports;


