import Layout from '../../Layout/index';





const Employees = ({users = []}) => {
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
      user: []
    }
  }
}

export default Employees;