import Layout from '../../Layout/index';





const Employees = () => {
  return (
    <div>

    </div>
  )
}


Employees.getLayout = (page) => (
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

export default Employees;