import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='login-container'>
        <div className='login-form'>
            <Image width={320} height={50} alt='' src='logo.png' />
            <div>
              <label htmlFor=""></label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">
              </label><input type="text" />
            </div>
        </div>
    </div>
  )
}

export default Home;