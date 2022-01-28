import Layout from '../../Layout/index';
import axios from 'axios';
import { Card, Icon } from 'semantic-ui-react';


const Employees = ({user = []}) => {
  return (
    <div className='card_wrapper'>
      {user.map((item) => {

        return (
          <Card>
            <Card.Content>
              <Card.Header>{item.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{item.role}</span>
              </Card.Meta>
              <Card.Description>
                {item.role}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {item.role}
            </Card.Content>
          </Card>
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