import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import { useAuth } from 'hooks/useAuth';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';


const Home = () => {
  const auth = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    auth.signin(form.email, form.password);
  }
  useEffect(() => {
    if(auth.user){
      router.push(`/${auth.user.user._id}`);
    }
  },[auth]);
  const handleChange = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name]:value})
  }
  return (
    <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle' className='login-container'>
      <Grid.Column style={{maxWidth: 450}}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image alt='' src='/logo.png' width={200} height={100} />
        </Header>
        <Form size='large'>
          <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail adress' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Button color='teal' fluid size='large'>
                  Login
              </Button>
          </Segment>
        </Form>
      </Grid.Column> 
    </Grid>
  )
}

export default Home;