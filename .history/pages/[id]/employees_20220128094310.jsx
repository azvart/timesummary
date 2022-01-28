import Layout from '../../Layout/index';
import axios from 'axios';
import { Card, Icon} from 'semantic-ui-react';
import Image from 'next/image';

const Employees = ({user = []}) => {
  return (
    <div className='card_wrapper'>
      {user.map((item) => {

        return (
          <Card>
            <Image src='/user.svg' alt='' width={290} height={50} />
            <Card.Content>
              <Card.Header>{item.name} {item.lastname}</Card.Header>
              <Card.Meta>
                <span className='date'>{item.role}</span>
              </Card.Meta>
              <Card.Description>
                {item.role}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {item.email}
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