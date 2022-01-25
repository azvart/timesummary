import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';


const Home = () => {
  return (
    <div className='login-container'>
        <div className='login-form'>
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