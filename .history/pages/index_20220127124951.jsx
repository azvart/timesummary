import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import { useAuth } from 'hooks/useAuth';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';


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
    <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle' >

    </Grid>
  )
}

export default Home;