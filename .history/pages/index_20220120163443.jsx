import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import axios from 'axios';
import { TextInput } from 'components/TextInput';

const Home = () => {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [res,setRes] = useState({});
  const [error, setError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
     axios({
      method:'post',
      url:"http://localhost:3000/api/user/login",
      data:form
    }).then(({data}) => {
      setRes(data);
      if(data.status){
        sessionStorage.setItem('token',data.token);
        sessionStorage.setItem('id', data.id);
      }else{
      setError(data.message);
      }
    })
  }
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const id = sessionStorage.getItem('id');
    if(token && id){
      router.push(`${id}`);
    }
  },[router, res]);
  const handleChange = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name]:value})
  }
  return (
    <div className='login-container'>
        <div className='login-form'>
            <div>
            <Image width={200} height={50} alt='' src='/logo.png' quality={100} />
            </div>
            <form className='form' onSubmit={handleSubmit}>
            <div>
            <TextInput name='email' />
            </div>
            <div>
            <TextInput name='password' />
            </div>
            <div className='btn-container'>
              <button className='login-btn' type='submit'>Login</button>
            </div>
           {error && (<span className='error'>
              {error}
            </span>)}
            </form>
        </div>
    </div>
  )
}

export default Home;