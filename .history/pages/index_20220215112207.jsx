import {useRouter} from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { useAuth } from 'hooks/useAuth';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import API from '../config/index';
import useUpdateEffect from '../hooks/useUpdateEffect';
const Home = (data = []) => {
  const router = useRouter();
  const [form, setForm] = useState({});
  const handleSubmit = (event) => {
    router.push({
      pathname:'/',
      query:{
        email:form.email,
        password: form.password
      }
    }, '/')
  }
  const handleChange = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name]:value})
  }
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



export async function getServerSideProps(ctx){
  const { email, password } = ctx.query;
 if(email && password){
 const { data } = await API({
   method:"POST",
   url:"/api/user/login",
   data:ctx.query
 });
 if(!data){
   return {
     notFound: true
   }
 }
 ctx.res.setHeader('x-auth-access', data.accessToken);
 ctx.res.setHeader('x-auth-refresh', data.refreshToken);
 ctx.res.setHeader('Location', `/${data.id}`);
 return {
   props: {}
 }
}
return { props : {}}
}
export default Home;