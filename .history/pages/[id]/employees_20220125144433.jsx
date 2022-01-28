import Layout from '../../Layout/index';
import axios from 'axios';




const Employees = ({users = []}) => {
  return (
    <div>
      {users.map((item) => (<div key={item._id}>{item.name}</div>))}
    </div>
  )
}


Employees.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)

export async function getServerSideProps(ctx){

  const {data} = await axios({
    method:"GET",
    url:"http://localhost:3000/api/user/all"
  });
  return {
    props:{
      user: data.users
    }
  }
}

export default Employees;