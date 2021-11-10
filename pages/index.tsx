import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { AuthPage } from './auth';
import { TextInput, Button } from '../components';
const Home: NextPage = () => {
  return (
      <div>
          <AuthPage>
            <TextInput type='text' />
            <TextInput type='password' />
            <Button label='SignIn' />
          </AuthPage>
      </div>
  )
}

export default Home
