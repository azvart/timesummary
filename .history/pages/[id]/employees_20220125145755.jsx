import Layout from '../../Layout/index';
import axios from 'axios';




const Employees = ({user = []}) => {
  return (
    <div className='card_wrapper'>
      {user.map((item) => {
        return (
          <div key={item._id} className='card'>
              <div className='card_title'>
                <h2>{item.name} {item.lastname}</h2>
              </div>
              <div className='card_body'>

              </div>
              <div className='card_footer'>
                <p>Возраст: {item.age}</p>
              </div>
          </div>
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