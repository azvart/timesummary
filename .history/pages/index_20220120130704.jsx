import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='login-container'>
        <div className='login-form'>
            <div>
            <Image width={100} height={50} alt='' src='/logo.png' quality={100} />
            </div>
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