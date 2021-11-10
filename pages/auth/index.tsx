import {FC} from 'react';
import Head from 'next/head';
import { IAuthPage } from '../../types/authpage.types';




export const AuthPage:FC<IAuthPage> = ({children})=>{

  return (
    <>
    <Head>
      <title>Authorization</title>
    </Head>
    <main className="layout">
      {children}
    </main>
    </>
  )
}