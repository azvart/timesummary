import Layout from '../../Layout/index';
import axios from 'axios';
import Image from 'next/image';
import Card from '../../components/card/index';


const Employees = ({user = []}) => {
  return (
    <div className='card_wrapper'>
      {user.map((item) => {
        return (
          <Card 
          name={item.name}
          lastName={item.lastname}
          age={item.age}
          email={item.email}  
          />
        )
      })}
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