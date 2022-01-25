import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import axios from 'axios';

const Home = () => {
  const [form, setForm] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {data} = axios({
      method:'post',
      url:"http://localhost:3000/api/user/login",
      data:form
    })
  }
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
            <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email'>Email</label>
              <input type="text" name='email' onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type="password" name='password' onChange={handleChange} required />
            </div>
            <div>
              <button type='submit'>Login</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Home;