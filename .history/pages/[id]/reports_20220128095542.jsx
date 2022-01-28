import Layout from '../../Layout/index';
import { Table } from 'semantic-ui-react';




const Reports = () => {
  return (
    <>
    </>
  )
}




Reports.getLayout = (page) => (
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

export default Reports;


