import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import { router } from "json-server";

const Layout = ({children}) => {
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const id = sessionStorage.getItem('id');
    if(!id && !token){
      router.push('/');
    }
  },[router]);
  return (
    <>
      <Navbar />
        <div className="wrapper">
          <Sidebar />
          {children}
        </div>

      <Footer />
    </>
  )
}


export default Layout;