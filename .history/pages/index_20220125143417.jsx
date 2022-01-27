import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import { TextInput } from 'components/TextInput';
import { useAuth } from 'hooks/useAuth';

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
      console.log(auth.user._id);
      router.push(`/${auth.user._id}`);
    }
  },[auth]);
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
            <TextInput name='email' label='Email' onChange={handleChange} type="email" />
            </div>
            <div>
            <TextInput name='password' label='Password' onChange={handleChange} type='password' />
            </div>
            <div className='btn-container'>
              <button className='login-btn' type='submit'>Login</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Home;