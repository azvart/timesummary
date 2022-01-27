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
    auth.signin(form.email, form.password);
  }
  const handleChange = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name]:value})
  }
  useEffect(() => {
    if(auth.user){
      router.push(`/${auth.user._id}`)
    }else{
      router.push('/')
    }
  },[auth])
  return (
    <Grid textAlign='center' style={{height: '100vh', margin: '0em'}} verticalAlign='middle' className='login-container'>
      <Grid.Column style={{maxWidth: 450}}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image alt='' src='/logo.png' width={200} height={100} />
        </Header>
        <Form size='large'>
          <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail adress' name='email' onChange={handleChange} />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='password'
                onChange={handleChange}
              />
              <Button color='teal' fluid size='large' onClick={handleSubmit}>
                  Login
              </Button>
          </Segment>
        </Form>
      </Grid.Column> 
    </Grid>
  )
}

export default Home;